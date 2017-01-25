let requireContext = (<{ context?: Function }>require);
let testsContext = requireContext.context("./app/_img/", true, /^\.\/.*\.gif/);
testsContext.keys().forEach(testsContext);