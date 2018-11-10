module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { type: 'build', scope: 'deps', release: 'patch' },
      ],
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      writerOpts: {
        transform: releaseNotesGeneratorTransform
      },
    }],
    ['@semantic-release/github', {
      successComment: false,
      failComment: false,
      labels: false,
      releasedLabels: false,
    }],
    '@semantic-release/npm',
  ],
};

function releaseNotesGeneratorTransform(commit, context) {
  const issues = [];

  commit.notes.forEach(note => {
    note.title = `BREAKING CHANGES`;
  });

  if (commit.type === `feat`) {
    commit.type = `Features`;
  } else if (commit.type === `fix`) {
    commit.type = `Bug Fixes`;
  } else if (commit.type === `perf`) {
    commit.type = `Performance Improvements`;
  } else if (commit.type === `revert`) {
    commit.type = `Reverts`;
  } else if (commit.type === `docs`) {
    commit.type = `Documentation`;
  } else if (commit.type === `style`) {
    return;
  } else if (commit.type === `refactor`) {
    commit.type = `Code Refactoring`;
  } else if (commit.type === `test`) {
    return;
  } else if (commit.type === `build`) {
    if (['dev-deps', 'devDeps'].includes(commit.scope)) {
      return;
    }
    commit.type = `Build System`;
  } else if (commit.type === `ci`) {
    return;
  } else if (commit.type === `chore`) {
    return;
  }

  if (commit.scope === `*`) {
    commit.scope = ``;
  }

  if (typeof commit.hash === `string`) {
    commit.hash = commit.hash.substring(0, 7);
  }

  if (typeof commit.subject === `string`) {
    let url = context.repository
      ? `${context.host}/${context.owner}/${context.repository}`
      : context.repoUrl;
    if (url) {
      url = `${url}/issues/`;
      // Issue URLs.
      commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
        issues.push(issue);
        return `[#${issue}](${url}${issue})`;
      });
    }
    if (context.host) {
      // User URLs.
      commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g, `[@$1](${context.host}/$1)`);
    }
  }

  // remove references that already appear in the subject
  commit.references = commit.references.filter(reference => !issues.includes(reference.issue));

  return commit;
};
