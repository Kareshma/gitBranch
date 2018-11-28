const releaseBranchName = process.argv[3];
const repoName = process.argv[2];

var branch = require('create-git-branch');

branch(repoName, releaseBranchName).then(function() {
    console.log("Success");
  }, function(err) {
    console.log("Error");
  }); 