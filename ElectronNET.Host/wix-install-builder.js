var ewix = require('@evoleap/electron-wix-msi');
const msiCreatorConf = require('./wix-config')
// Step 1: Instantiate the MSICreator

const msiCreator = new ewix.MSICreator(msiCreatorConf);

// Step 2: Create a .wxs template file
const supportBinaries = msiCreator.create().then(function() {
    // Step 3: Compile the template to a .msi file
    msiCreator.compile();
});

// // 🆕 Step 2a: optionally sign support binaries if you
// // sign you binaries as part of of your packaging script
// supportBinaries.forEach(async (binary) => {
//   // Binaries are the new stub executable and optionally
//   // the Squirrel auto updater.
//   await signFile(binary);
// });

