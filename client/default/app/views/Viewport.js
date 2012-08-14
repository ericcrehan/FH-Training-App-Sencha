app.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  ui: 'light',
  layout: 'card',

  cardSwitchAnimation: {
    type: 'slide',
    cover: true
  },

  initComponent: function() {
    // Put instances of cards into app.views namespace
    Ext.apply(app.views, {
     
    });
    //put instances of cards (views) into viewport
    Ext.apply(this, {
      items: [
       {
       html: 'Test View'
     }
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }
});


// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});
