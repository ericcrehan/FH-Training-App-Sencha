Ext.regApplication({
  name: 'app',
  launch: function() {
    console.log("App Launched");
    this.views.viewport = new this.views.Viewport();
  }
});