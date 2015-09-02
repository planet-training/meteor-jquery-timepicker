Package.describe({
  summary: "Jonthornton jQuer-Timepicker for Meteor.",
  name: "planettraining:jquery-timepicker",
  version: "1.8.0",
  git:"https://github.com/planet-training/meteor-jquery-timepicker.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");

  api.addFiles([
    'bower_components/jt.timepicker/jquery.timepicker.js',
    'bower_components/jt.timepicker/jquery.timepicker.css'
  ], "client");
});
