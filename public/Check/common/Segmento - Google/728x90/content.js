(function(cjs, an) {
 var p;
 var lib = {};
 var ss = {};
 var img = {};
 lib.ssMetadata = [];
 (lib.bubble = function() {
  this.initialize(img.bubble);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 448, 448);
 (lib.fish1 = function() {
  this.initialize(img.fish1);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 342, 311);
 (lib.fish2 = function() {
  this.initialize(img.fish2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 346, 266);
 (lib.icon3 = function() {
  this.initialize(img.icon3);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 214, 214);
 (lib.packshot = function() {
  this.initialize(img.packshot);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 352, 170);

 function mc_symbol_clone() {
  var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
  clone.gotoAndStop(this.currentFrame);
  clone.paused = this.paused;
  clone.framerate = this.framerate;
  return clone;
 }

 function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
  var prototype = cjs.extend(symbol, cjs.MovieClip);
  prototype.clone = mc_symbol_clone;
  prototype.nominalBounds = nominalBounds;
  prototype.frameBounds = frameBounds;
  return prototype;
 }
 (lib.t4 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AAAAIIgIAPIgGgGIAJgOIgOgEIACgJIAOAGIAAgSIAHAAIAAASIANgGIADAJIgOAEIAJAOIgHAGg");
  this.shape.setTransform(246.05, 54.15);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AAAAIIgHAPIgHgGIAIgOIgNgEIADgJIANAGIAAgSIAHAAIAAASIAOgGIACAJIgOAEIAJAOIgGAGg");
  this.shape_1.setTransform(241.4, 54.15);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AAAAIIgIAPIgGgGIAIgOIgNgEIACgJIAOAGIAAgSIAHAAIAAASIAOgGIACAJIgNAEIAIAOIgHAGg");
  this.shape_2.setTransform(236.75, 54.15);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgSBAQgJgEgGgIQgFgHgCgIQgCgJAAgIIAUAAIABAIIADAIQADAFAEADIAHADIAFAAQAEABADgBQADgBADgCQAFgEABgFIABgIIAAgGIgCgGQgCgDgDgCQgCgCgEAAIgGgBIgLAAIAAgSIAJAAIAFAAQAEgBACgCQACgBACgDQACgEABgGIgDgJIgDgGQgEgDgDAAIgFAAIgGAAIgHADQgEAEgBAFQgDAEABAFIgVAAIAAgIIADgKQACgFADgFQAFgHAKgDQAIgDALAAIAJABIAKADQAEACAFADQAFAEACAGIACAJIABAIQABAFgCAFQgBAGgGAGIgDADIgGACIAAABQAEABADABIAEACQAFAEACAGQADAHABAKQgBALgEAHQgEAHgFAEQgEADgGADQgIADgMAAQgKAAgIgDg");
  this.shape_3.setTransform(228.8, 60.25);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AAaA/IgHgaIglAAIgHAaIgWAAIAmh9IATAAIAmB9gAAOASIgOg1IgNA1IAbAAg");
  this.shape_4.setTransform(218.925, 60.25);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgnA/IAAh9IAnAAQAKAAAIACQAIACAGAHQAFAHACAIIABANQAAALgDAIQgDAGgEAFQgHAFgIADQgHACgIAAIgSAAIAAAugAgSgBIARAAIAHgBQAEgBAEgEIADgGQABgDAAgGIgBgJIgDgGQgEgEgEgBIgHgBIgRAAg");
  this.shape_5.setTransform(209.525, 60.25);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AgSAwIgHgDQgFgCgDgGQgDgGAAgJIABgIQABgFACgDIAGgGIAHgCIAJgCIAMgDIAEgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIAAgBIABgGIgBgHIgEgGQgCgCgCAAIgDAAQgFAAgDACIgFAFIgBAFIAAAEIgTAAIABgJQABgFACgEQAFgGAEgDQAGgDAEgBIAKAAIAKAAQAGACAGAEQAFAEADAHQABAGAAAJIAAAkIABAGIAAADIADACIADAAIAAAOIgFABIgFAAIgFgBQgDAAgCgCIgDgEIgCgFIAAAAIgDAGIgEACQgDADgEACIgJABIgHgBgAAKAEIgCAAIgEACIgDAAIgGACIgEACQgEACgCADIAAAHIAAAEIACAFIAEACIADABIAGgBQADgCACgEQADgEACgHIABgKIAAgDIgBABg");
  this.shape_6.setTransform(195.5, 61.9);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AgKAxQgFgBgFgDQgGgFgEgHQgDgHgBgJIATAAIABAGIADAGQADAEADABIAFABIAEgBIAFgCQACgCACgDQABgDAAgEIgBgGQAAgDgDgCIgFgCIgFAAIgHAAIAAgOIAGAAIADAAIAFgCQADgCABgDIAAgGIgBgGIgCgEQgCgCgDgBIgDAAIgFAAIgFAFIgCAGIAAAFIgTAAQAAgGACgGQACgGADgEQAGgGAGgCIAMgBIAMABQAGACAGAFQADADACAFQACAGAAAGQABAEgCAEIgEAHIgEADIgDABIAAABIAFAAQADABADAEQADADABADIABAIQAAAGgCAFIgEAIIgFAFQgGAEgGABIgMABIgKAAg");
  this.shape_7.setTransform(186.925, 61.975);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AgSAwIgHgDQgFgCgDgGQgDgGAAgJIABgIQABgFACgDIAGgGIAHgCIAJgCIAMgDIAEgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIAAgBIABgGIgBgHIgEgGQgCgCgCAAIgDAAQgFAAgDACIgFAFIgBAFIAAAEIgTAAIABgJQABgFACgEQAFgGAEgDQAGgDAFgBIAJAAIAKAAQAGACAFAEQAHAEACAHQABAGAAAJIAAAkIABAGIAAADIADACIADAAIAAAOIgFABIgFAAIgFgBQgDAAgCgCIgDgEIgCgFIAAAAIgDAGIgEACQgDADgDACIgKABIgHgBgAAKAEIgCAAIgEACIgDAAIgGACIgEACQgEACgCADIAAAHIAAAEIACAFIAEACIADABIAGgBQADgCACgEQADgEACgHIABgKIAAgDIgBABg");
  this.shape_8.setTransform(237.9, 43);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AggAuIgEgBIAAgOQAFABADgCQADgCACgDQACgCAAgFIACgMIAAgVIAAgeIA4AAIAABaIgUAAIAAhLIgRAAIAAARIAAAOIgBAKIAAAEQgBALgDAFQgCAGgDADIgIAEQgFACgGAAIgDAAg");
  this.shape_9.setTransform(228.725, 43.1);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgTA/IgGgBIAAgPIADABIAEAAQAEAAADgDQACgDACgFIACgIIghhbIAVAAIAUBCIAAAAIARhCIATAAIgcBjIgDAJQgCAFgDAEQgDAFgDABQgFACgGAAIgFAAg");
  this.shape_10.setTransform(221, 44.775);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AABAxIgHAAIgJgEQgFgCgFgGQgEgFgDgKQgDgJAAgNIABgKIACgOQADgHAEgGQAGgGAHgDQAHgCAFAAIANABQAHACAGAHQAFAFACAGQACAGABAHIgTAAIgBgHIgDgFIgEgGQgDgBgEAAQgEAAgDACIgFAGIgDAJIgBAJIAAAHIABAMQABAHACAFQADAGADACQAEADADAAQAEAAADgDQADgCABgEIADgIIABgGIASAAIgCAMQgCAHgEAGQgGAHgHADQgGACgGAAIgCAAg");
  this.shape_11.setTransform(212.875, 43.0786);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AAOAuIAAhMIgcAAIAABMIgTAAIAAhbIBDAAIAABbg");
  this.shape_12.setTransform(203.975, 43.075);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgSAwIgHgDQgFgCgDgGQgDgGAAgJIABgIQABgFACgDIAGgGIAHgCIAJgCIAMgDIAEgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIAAgBIABgGIgBgHIgEgGQgCgCgCAAIgDAAQgFAAgDACIgFAFIgBAFIAAAEIgTAAIABgJQABgFACgEQAFgGAEgDQAGgDAFgBIAJAAIAKAAQAGACAFAEQAHAEACAHQABAGAAAJIAAAkIABAGIAAADIADACIADAAIAAAOIgFABIgFAAIgFgBQgDAAgCgCIgDgEIgCgFIAAAAIgDAGIgEACQgDADgDACIgKABIgHgBgAAKAEIgCAAIgEACIgDAAIgGACIgEACQgEACgCADIAAAHIAAAEIACAFIAEACIADABIAGgBQADgCACgEQADgEACgHIABgKIAAgDIgBABg");
  this.shape_13.setTransform(195.15, 43);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AAMAuIgZgtIAAAtIgUAAIAAhbIAUAAIAAAmIAXgmIAWAAIgeArIAgAwg");
  this.shape_14.setTransform(187.425, 43.075);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AAaA/IgHgaIglAAIgHAaIgWAAIAmh9IATAAIAmB9gAAOASIgOg1IgNA1IAbAAg");
  this.shape_15.setTransform(221.125, 22.45);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAUA/IAAg4IgnAAIAAA4IgVAAIAAh9IAVAAIAAAzIAnAAIAAgzIAWAAIAAB9g");
  this.shape_16.setTransform(210.85, 22.45);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AAjBNIAAgcIhFAAIAAAcIgTAAIAAgvIAJAAIAEgHIAFgNIAFgTIACgNIABgOIAAgNIAAgbIBDAAIAABqIAOAAIgBAvgAgHgqIgBARIgCARIgFAUIgGASIAoAAIAAhXIgaAAg");
  this.shape_17.setTransform(199.825, 23.875);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgOBBQgIgDgIgGQgLgKgDgOQgFgOAAgSQAAgRAFgOQADgOALgKQAIgHAIgCQAIgCAGAAQAIAAAHACQAIACAIAHQAKAKAFAOQAEAOAAARQAAASgEAOQgFAOgKAKQgIAGgIADQgHACgIAAQgGAAgIgCgAAJAuQAFgCAEgFQADgFADgHIADgOIABgNIgBgNIgDgNQgDgHgDgFQgEgFgFgCQgFgCgEABQgDgBgEACQgGACgEAFQgDAFgDAHIgDANIgBANIABANIADAOQADAHADAFQAEAFAGACQAEACADgBQAEABAFgCg");
  this.shape_18.setTransform(188.65, 22.45);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(181, 10, 320, 67.8), null);
 (lib.t3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AgKBDIAAgaIAVAAIAAAagAgFAZIgFgtIAAguIAVAAIAAAuIgFAtg");
  this.shape.setTransform(264.775, 47.25);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AgKAzQgGgBgFgDQgGgFgFgHQgDgIAAgJIATAAIABAHIADAGQADADADACIAGAAIAEAAIAFgCIAEgFQACgDAAgFIgBgGQgBgDgDgCIgFgCIgFgBIgIAAIAAgOIAHAAIADgBIAFgCQADgCABgDIABgGQAAgEgCgDIgCgEQgCgCgDgBIgDAAQgCgBgEACQgDABgCAEIgCAGIgBAFIgUAAQABgHACgGQACgGAEgFQAFgFAIgCQAHgCAFAAIAMABQAHACAHAGQADADACAGQACAFAAAGIgBAJQgCAEgDADIgDADIgEACIAAABIAGAAQACABAEAEQADADAAAEIABAIQAAAHgBAFQgCAFgDADIgEAFQgHAEgHACIgMABIgKgBg");
  this.shape_1.setTransform(257.9, 49.075);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AgTAzIgHgEQgFgCgDgGQgEgGAAgJQAAgGABgDQABgFADgEIAFgGIAIgCIAJgDIANgDIAEAAIAEgCIABgDIAAgFQABgEgCgEQgBgDgCgDQgDgCgCAAIgDAAQgGAAgDACQgDADgBADIgCAEIAAAFIgUAAIABgJQABgFADgFQAEgGAFgDQAFgDAGgCIAKgBIAKACQAHABAGAEQAGAFACAHQACAHAAAJIAAAlIABAHIAAADQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIADAAIAAAQIgFAAIgFAAIgGAAQgDgBgCgCIgDgDIgCgGIAAAAQgCAEgCACIgDADIgHAEQgFACgGAAIgHgBgAAKADIgCABIgEACIgEABIgFACIgFABQgEACgBAEQgBADAAADIAAAFQABADACADIADACIAEABQADAAADgCQADgCADgEQADgEABgGQACgGgBgGIAAgEIgBABg");
  this.shape_2.setTransform(249.525, 49);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgbAwIAAhfIA3AAIAAAPIgjAAIAABQg");
  this.shape_3.setTransform(242.4, 49.075);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AgMAyQgHgCgHgIQgFgEgDgKQgEgJAAgQIAAgLIAEgOQACgIAFgGQAHgIAHgDQAIgCAGAAQAIAAAIADQAHADAHAKQAEAGACALQACAKAAAOIg3AAIABAMQACAHADAEQADAFAEABQADACACgBQACABAEgCQADgBADgEIADgEIABgGIAUAAQgBAHgDAFQgCAGgEAEQgHAGgHACQgIACgFAAQgGAAgHgCgAgGghIgFAEQgDAFgBAFIgBAKIAhAAIAAgEIgBgHIgCgHIgGgHQgEgBgEAAQgDAAgDACg");
  this.shape_4.setTransform(234.075, 49.075);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgiAwIgEAAIAAgPQAFAAAEgBIAFgFIACgIIACgMIAAgXIAAgfIA7AAIAABfIgVAAIAAhQIgSAAIAAASIAAAPIgBAKIAAAGQgBAJgDAHQgDAFgDAEQgEADgEACQgFABgGAAIgEAAg");
  this.shape_5.setTransform(224.725, 49.1);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_6.setTransform(216.225, 49.075);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AgJAwIAAhQIgaAAIAAgPIBHAAIAAAPIgaAAIAABQg");
  this.shape_7.setTransform(207.95, 49.075);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AgUAuQgIgGgFgLQgDgHgCgHIgBgPIABgOQACgHADgHQAFgLAIgGQAJgGALAAQAMAAAJAGQAJAGAFALQADAHABAHIABAOIgBAPQgBAHgDAHQgFALgJAGQgJAGgMAAQgLAAgJgGgAgHghQgEADgCAFIgDAJIgBAJIAAAHIAAAIIABAJIADAJQACAFAEADQADACAEAAQAFAAAEgCQADgDACgFIADgJIABgJIAAgIIAAgHIgBgJIgDgJQgCgFgDgDQgEgCgFAAQgEAAgDACg");
  this.shape_8.setTransform(199.825, 49.075);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AAlBDIAAhaIABgPIgBAAIgcBpIgRAAIgbhpIgCAAIACAPIAABaIgXAAIAAiFIAgAAIAaBkIAbhkIAgAAIAACFg");
  this.shape_9.setTransform(188.175, 47.25);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgMAyQgHgCgHgIQgFgEgDgKQgEgJAAgQIAAgLIAEgOQACgIAFgGQAHgIAHgDQAIgCAGAAQAIAAAIADQAHADAHAKQAEAGACALQACAKAAAOIg3AAIABAMQACAHADAEQADAFAEABQADACACgBQACABAEgCQADgBADgEIADgEIABgGIAUAAQgBAHgDAFQgCAGgEAEQgHAGgHACQgIACgFAAQgGAAgHgCgAgGghIgFAEQgDAFgBAFIgBAKIAhAAIAAgEIgBgHIgCgHIgGgHQgEgBgEAAQgDAAgDACg");
  this.shape_10.setTransform(271.325, 30.925);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgKAwIAAhQIgZAAIAAgPIBHAAIAAAPIgZAAIAABQg");
  this.shape_11.setTransform(263.35, 30.925);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AARBCIAAhDIgfBDIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfgAgKgoIgGgDIgEgCIgFgIQgDgFgBgIIARAAIAAAFIADAEQACAEADABIAEABIAFgBQADgBACgEIACgEIABgFIARAAQgBAIgDAFQgDAFgDADIgDACIgHADIgKABIgKgBg");
  this.shape_12.setTransform(255.075, 29.1);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgTAzIgHgDQgFgDgDgGQgEgGAAgJQAAgFABgEQABgFADgEIAFgGIAIgCIAJgDIANgDIAEgBIAEgCIABgBIAAgGQABgEgCgEQgBgEgCgCQgDgCgCAAIgDgBQgGAAgDADQgDACgBADIgCAFIAAAFIgUAAIABgKQABgEADgFQAEgHAFgDQAFgCAGgBIAKgBIAKABQAHABAGAEQAGAGACAHQACAGAAAJIAAAmIABAGIAAADQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIADAAIAAAQIgFABIgFAAIgGgBQgDAAgCgDIgDgEIgCgFIAAAAQgCAEgCACIgDADIgHAEQgFABgGAAIgHAAgAAKAEIgCABIgEABIgEABIgFABIgFACQgEADgBADQgBADAAAEIAAAEQABADACADIADACIAEAAQADABADgCQADgCADgEQADgEABgHQACgFgBgGIAAgDIgBABg");
  this.shape_13.setTransform(245.975, 30.85);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AAdAwIAAg8IAAgKIAAAAIgVBGIgPAAIgUhGIgBAAIABAKIAAA8IgVAAIAAhfIAbAAIAVBHIAWhHIAbAAIAABfg");
  this.shape_14.setTransform(235.725, 30.925);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_15.setTransform(225.075, 30.925);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAPAwIAAgrIgcAAIAAArIgVAAIAAhfIAVAAIAAAmIAcAAIAAgmIAUAAIAABfg");
  this.shape_16.setTransform(215.775, 30.925);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_17.setTransform(206.475, 30.925);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgnBEIAAiDIATAAIAAAKIABAAIADgFIAEgDIAHgEIAJgCQAHAAAGADQAGADAFAHQAGAHACAIQADAIABAHIAAAJIgBALIgCALIgEAMIgHAIQgEAEgGADQgFACgHABIgHgCIgHgDIgFgEIgDgEIAAAAIAAAsgAAFATQADgBAEgGQADgDABgHIACgQIgBgLQAAgHgDgGQgDgIgEgCQgFgDgCAAQgEAAgEADQgEACgEAIQgCAGgBAGIgBAMIAAAIIACAIIAEAKQADAFAEACQADACADAAQACAAAEgCg");
  this.shape_18.setTransform(197.175, 32.475);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AAVBCIAAhvIgpAAIAABvIgWAAIAAiEIBVAAIAACEg");
  this.shape_19.setTransform(186.65, 29.1);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(179, 16, 269, 45.3), null);
 (lib.t2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AAAAJIgHANIgGgFIAIgOIgNgEIACgIIANAFIAAgRIAHAAIAAARIANgFIACAIIgNAEIAIAOIgGAFg");
  this.shape.setTransform(358.625, 44.4);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_1.setTransform(352.075, 52.075);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AgiAxIgEgBIAAgQQAFACAEgCIAFgFIACgHIACgOIAAgWIAAggIA7AAIAABgIgVAAIAAhQIgSAAIAAASIAAAPIgBAKIAAAFQgBALgDAFQgDAGgDADQgEAEgEACQgFABgGABIgEAAg");
  this.shape_2.setTransform(343.225, 52.1);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgUAuQgIgGgFgLQgDgHgCgHIgBgPIABgOQACgHADgHQAFgLAIgGQAJgGALAAQAMAAAJAGQAJAGAFALQADAHABAHIABAOIgBAPQgBAHgDAHQgFALgJAGQgJAGgMAAQgLAAgJgGgAgHghQgEADgCAFIgDAJIgBAJIAAAHIAAAIIABAJIADAJQACAFAEADQADACAEAAQAFAAAEgCQADgDACgFIADgJIABgJIAAgIIAAgHIgBgJIgDgJQgCgFgDgDQgEgCgFAAQgEAAgDACg");
  this.shape_3.setTransform(335.675, 52.075);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AgMBGQgGgCgEgDIgGgGQgGgHgCgJQgDgIAAgJIgBgQIABgYIACgPIADgJQACgHAFgGQAFgFAHgDIALgDIALgCQAHgBACgCQADgCAAgCIAPAAIgBAGIgCAFQgDAIgGADQgFACgIACIgNADQgGACgFAEQgFAEgCAIIgCAHIgBAHIAAAFIABAAIADgHQABgEADgDQAEgFAGgDQAFgCAHgBQAHABAGACQAGADAEAEQAEAFADAHQADAHACAHIABAPQAAAJgCAJQgDAKgGAIQgGAIgIAEQgHADgJAAQgGAAgGgCgAgFgLQgEACgDAGQgEAGgBAGIgBAMIABAMQABAHADAGQADAGAEADQAEACACgBQAEABAEgDQADgCADgGQAEgGAAgHIABgMIAAgHIgBgKIgDgHQgDgGgEgCQgDgCgEAAQgCAAgEACg");
  this.shape_4.setTransform(327.225, 50.075);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_5.setTransform(314.925, 52.075);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_6.setTransform(302.725, 52.075);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_7.setTransform(293.975, 52.075);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AAPAwIAAgrIgcAAIAAArIgVAAIAAhfIAVAAIAAAmIAcAAIAAgmIAUAAIAABfg");
  this.shape_8.setTransform(285.475, 52.075);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgTAzIgHgDQgFgDgDgGQgEgGAAgJQAAgFABgEQABgFADgEIAFgGIAIgCIAJgDIANgDIAEgBIAEgCIABgBIAAgGQABgEgCgEQgBgEgCgCQgDgCgCAAIgDgBQgGAAgDADQgDACgBADIgCAFIAAAFIgUAAIABgKQABgEADgFQAEgHAFgDQAFgCAGgBIAKgBIAKABQAHABAGAEQAGAGACAHQACAGAAAJIAAAmIABAGIAAADQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIADAAIAAAQIgFABIgFAAIgGgBQgDAAgCgDIgDgDIgCgGIAAAAQgCAEgCACIgDADIgHAEQgFABgGAAIgHAAgAAKAEIgCABIgEABIgEABIgFABIgFACQgEADgBADQgBADAAAEIAAAEQABADACADIADACIAEAAQADABADgCQADgCADgEQADgEABgHQACgFgBgGIAAgDIgBABg");
  this.shape_9.setTransform(277.425, 52);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgiAwIAAhfIApAAIAKABQAFABAEADQAEAEABAFQACAFgBAEIgBAJQgBAEgDADIgFAFIgFABIAAABIAGABQADABACADQADACACAFQACAEAAAHQAAAIgCAFIgFAHIgIAEQgFACgIAAgAgNAhIANAAIAEgBIAFgCIADgDQACgDAAgEIgBgHIgDgEQgDgCgDAAIgFgBIgMAAgAgNgJIALAAIAEAAIAFgCQADgCAAgDIABgFIgBgFQAAgCgDgCIgEgBIgDgBIgNAAg");
  this.shape_10.setTransform(269.725, 52.075);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgUAuQgIgGgFgLQgDgHgCgHIgBgPIABgOQACgHADgHQAFgLAIgGQAJgGALAAQAMAAAJAGQAJAGAFALQADAHABAHIABAOIgBAPQgBAHgDAHQgFALgJAGQgJAGgMAAQgLAAgJgGgAgHghQgEADgCAFIgDAJIgBAJIAAAHIAAAIIABAJIADAJQACAFAEADQADACAEAAQAFAAAEgCQADgDACgFIADgJIABgJIAAgIIAAgHIgBgJIgDgJQgCgFgDgDQgEgCgFAAQgEAAgDACg");
  this.shape_11.setTransform(261.375, 52.075);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AgKAzQgGgBgFgDQgGgFgFgHQgDgIgBgJIAUAAIABAHIADAGQADADADACIAGAAIAEAAIAFgCIAEgFQACgDAAgFIgBgGQgBgDgDgCIgFgCIgFgBIgIAAIAAgOIAHAAIADgBIAFgCQADgCABgDIABgGQAAgEgCgDIgCgEQgCgCgDgBIgDAAQgCgBgEACQgDABgCAEIgCAGIgBAFIgUAAQABgHACgGQACgGAEgFQAFgFAIgCQAHgCAFAAIAMABQAHACAHAGQADADACAGQACAFAAAGIgBAJQgCAEgDADIgDADIgEACIAAABIAGAAQACABAEAEQADADAAAEIABAIQAAAHgBAFQgCAFgDADIgEAFQgHAEgHACIgMABIgKgBg");
  this.shape_12.setTransform(253.4, 52.075);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgTAzIgHgDQgFgDgDgGQgEgGAAgJQAAgFABgEQABgFADgEIAFgGIAIgCIAJgDIANgDIAEgBIAEgCIABgBIAAgGQABgEgCgEQgBgEgCgCQgDgCgCAAIgDgBQgGAAgDADQgDACgBADIgCAFIAAAFIgUAAIABgKQABgEADgFQAEgHAFgDQAFgCAGgBIAKgBIAKABQAHABAGAEQAGAGACAHQACAGAAAJIAAAmIABAGIAAADQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAIADAAIAAAQIgFABIgFAAIgGgBQgDAAgCgDIgDgDIgCgGIAAAAQgCAEgCACIgDADIgHAEQgFABgGAAIgHAAgAAKAEIgCABIgEABIgEABIgFABIgFACQgEADgBADQgBADAAAEIAAAEQABADACADIADACIAEAAQADABADgCQADgCADgEQADgEABgHQACgFgBgGIAAgDIgBABg");
  this.shape_13.setTransform(245.825, 52);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AgnBEIAAiDIATAAIAAAKIABAAIADgFIAEgDIAHgEIAJgCQAHAAAGADQAGADAFAHQAGAHACAIQADAIABAHIAAAJIgBALIgCALIgEAMIgHAIQgEAEgGADQgFACgHABIgHgCIgHgDIgFgEIgDgEIAAAAIAAAsgAAFATQADgBAEgGQADgDABgHIACgQIgBgLQAAgHgDgGQgDgIgEgCQgFgDgCAAQgEAAgEADQgEACgEAIQgCAGgBAGIgBAMIAAAIIACAIIAEAKQADAFAEACQADACADAAQACAAAEgCg");
  this.shape_14.setTransform(237.725, 53.625);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AgMBGQgGgCgEgDIgGgGQgGgHgCgJQgDgIAAgJIgBgQIABgYIACgPIADgJQACgHAFgGQAFgFAHgDIALgDIALgCQAHgBACgCQADgCAAgCIAPAAIgBAGIgCAFQgDAIgGADQgFACgIACIgNADQgGACgFAEQgFAEgCAIIgCAHIgBAHIAAAFIABAAIADgHQABgEADgDQAEgFAGgDQAFgCAHgBQAHABAGACQAGADAEAEQAEAFADAHQADAHACAHIABAPQAAAJgCAJQgDAKgGAIQgGAIgIAEQgHADgJAAQgGAAgGgCgAgFgLQgEACgDAGQgEAGgBAGIgBAMIABAMQABAHADAGQADAGAEADQAEACACgBQAEABAEgDQADgCADgGQAEgGAAgHIABgMIAAgHIgBgKIgDgHQgDgGgEgCQgDgCgEAAQgCAAgEACg");
  this.shape_15.setTransform(228.825, 50.075);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AgUAuQgIgGgFgLQgDgHgCgHIgBgPIABgOQACgHADgHQAFgLAIgGQAJgGALAAQAMAAAJAGQAJAGAFALQADAHABAHIABAOIgBAPQgBAHgDAHQgFALgJAGQgJAGgMAAQgLAAgJgGgAgHghQgEADgCAFIgDAJIgBAJIAAAHIAAAIIABAJIADAJQACAFAEADQADACAEAAQAFAAAEgCQADgDACgFIADgJIABgJIAAgIIAAgHIgBgJIgDgJQgCgFgDgDQgEgCgFAAQgEAAgDACg");
  this.shape_16.setTransform(220.125, 52.075);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgUAuQgIgGgFgLQgDgHgCgHIgBgPIABgOQACgHADgHQAFgLAIgGQAJgGALAAQAMAAAJAGQAJAGAFALQADAHABAHIABAOIgBAPQgBAHgDAHQgFALgJAGQgJAGgMAAQgLAAgJgGgAgHghQgEADgCAFIgDAJIgBAJIAAAHIAAAIIABAJIADAJQACAFAEADQADACAEAAQAFAAAEgCQADgDACgFIADgJIABgJIAAgIIAAgHIgBgJIgDgJQgCgFgDgDQgEgCgFAAQgEAAgDACg");
  this.shape_17.setTransform(211.725, 52.075);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgKAzQgGgBgFgDQgGgFgEgHQgEgIgBgJIAVAAIABAHIACAGQADADAEACIAFAAIAEAAIAFgCIAEgFQACgDAAgFIgBgGQgBgDgDgCIgFgCIgFgBIgIAAIAAgOIAHAAIADgBIAFgCQADgCABgDIABgGQAAgEgBgDIgDgEQgCgCgCgBIgEAAQgCgBgDACQgEABgCAEIgCAGIAAAFIgUAAQAAgHACgGQACgGAEgFQAFgFAIgCQAHgCAFAAIANABQAGACAGAGQAEADACAGQACAFAAAGIgBAJQgBAEgEADIgEADIgDACIAAABIAFAAQADABAEAEQACADABAEIABAIQAAAHgCAFQgBAFgCADIgGAFQgGAEgGACIgNABIgKgBg");
  this.shape_18.setTransform(203.75, 52.075);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AgTAzIgHgDQgFgDgDgGQgEgGAAgJQAAgFABgEQABgFADgEIAFgGIAIgCIAJgDIANgDIAEgBIAEgCIABgBIAAgGQABgEgCgEQgBgEgCgCQgDgCgCAAIgDgBQgGAAgDADQgDACgBADIgCAFIAAAFIgUAAIABgKQABgEADgFQAEgHAFgDQAFgCAGgBIAKgBIAKABQAHABAGAEQAGAGACAHQACAGAAAJIAAAmIABAGIAAADQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADAAIAAAQIgFABIgFAAIgGgBQgDAAgCgDIgDgDIgCgGIAAAAQgCAEgCACIgDADIgHAEQgFABgGAAIgHAAgAAKAEIgCABIgEABIgEABIgFABIgFACQgEADgBADQgBADAAAEIAAAEQABADACADIADACIAEAAQADABADgCQADgCADgEQADgEABgHQACgFgBgGIAAgDIgBABg");
  this.shape_19.setTransform(196.175, 52);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AgbAwIAAhfIA3AAIAAAPIgjAAIAABQg");
  this.shape_20.setTransform(189.95, 52.075);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AgJAPIADgBQACgBACgEQACgDAAgGIAAgBIgJAAIAAgaIATAAIAAAaIgBALQgBAGgGAGIgFAEIgGACg");
  this.shape_21.setTransform(280.225, 37.975);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_22.setTransform(273.175, 32.925);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_23.setTransform(263.925, 32.925);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgKAwIAAhQIgZAAIAAgPIBHAAIAAAPIgZAAIAABQg");
  this.shape_24.setTransform(255.95, 32.925);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AgUBCIgGgBIAAgQIADABIAEABQAFgBACgDQADgDACgFIADgJIgkhfIAWAAIAWBFIAAAAIARhFIAUAAIgdBoIgDAJIgFAKQgEAFgEABQgEACgGAAIgGAAg");
  this.shape_25.setTransform(248.75, 34.725);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AAdA9IAAgZIg5AAIAAAZIgSAAIgCgpIALAAIAEgIIADgKQAEgMABgLIAAgWIAAgRIA8AAIAABQIAOAAIgCApgAgGggIAAAMIgCANIgDANIgFAOIAeAAIAAhAIgUAAg");
  this.shape_26.setTransform(240.275, 34.175);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AgKAzQgGgBgFgDQgGgFgFgHQgDgIAAgJIATAAIABAHIADAGQADADADACIAGAAIAEAAIAFgCIAEgFQACgDAAgFIgBgGQgBgDgDgCIgFgCIgFgBIgIAAIAAgOIAHAAIADgBIAFgCQADgCABgDIABgGQAAgEgCgDIgCgEQgCgCgDgBIgDAAQgDgBgDACQgDABgCAEIgCAGIgBAFIgUAAQABgHACgGQACgGAEgFQAGgFAGgCQAIgCAFAAIAMABQAHACAHAGQADADACAGQACAFAAAGIgBAJQgCAEgDADIgDADIgEACIAAABIAGAAQACABADAEQAEADABAEIAAAIQAAAHgBAFQgCAFgDADIgEAFQgHAEgHACIgMABIgKgBg");
  this.shape_27.setTransform(231.7, 32.925);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AgiAwIAAhfIApAAIAKABQAFABAEADQAEAEABAFQACAFgBAEIgBAJQgBAEgDADIgFAFIgFABIAAABIAGABQADABACADQADACACAFQACAEAAAHQAAAIgCAFIgFAHIgIAEQgFACgIAAgAgNAhIANAAIAEgBIAFgCIADgDQACgDAAgEIgBgHIgDgEQgDgCgDAAIgFgBIgMAAgAgNgJIALAAIAEAAIAFgCQADgCAAgDIABgFIgBgFQAAgCgDgCIgEgBIgDgBIgNAAg");
  this.shape_28.setTransform(223.825, 32.925);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AARAwIAAhEIgfBEIgXAAIAAhfIAVAAIAABEIAfhEIAXAAIAABfg");
  this.shape_29.setTransform(210.875, 32.925);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AgnBEIAAiDIATAAIAAAKIABAAIADgFIAEgDIAHgEIAJgCQAHAAAGADQAGADAFAHQAGAHACAIQADAIABAHIAAAJIgBALIgCALIgEAMIgHAIQgEAEgGADQgFACgHABIgHgCIgHgDIgFgEIgDgEIAAAAIAAAsgAAFATQADgBAEgGQADgDABgHIACgQIgBgLQAAgHgDgGQgDgIgEgCQgFgDgCAAQgEAAgEADQgEACgEAIQgCAGgBAGIgBAMIAAAIIACAIIAEAKQADAFAEACQADACADAAQACAAAEgCg");
  this.shape_30.setTransform(201.875, 34.475);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AAVBCIAAhvIgpAAIAABvIgXAAIAAiDIBXAAIAACDg");
  this.shape_31.setTransform(191.65, 31.1);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(184, 18, 439, 49.099999999999994), null);
 (lib.packshot_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.packshot();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.packshot_1, new cjs.Rectangle(0, 0, 234.8, 113.4), null);
 (lib.orange = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AAAANIgMAUIgJgIIAMgUIgTgHIADgMIAUAHIAAgZIALAAIAAAZIATgHIAEAMIgTAHIAMAUIgJAIg");
  this.shape.setTransform(113.4, 40.75);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AAAANIgLAUIgKgIIAMgUIgTgHIADgMIAUAHIAAgZIALAAIAAAZIAUgHIADAMIgUAHIANAUIgKAIg");
  this.shape_1.setTransform(106.25, 40.75);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AgNBUIAAghIAcAAIAAAhgAgHAfIgGg4IAAg6IAcAAIAAA6IgHA4g");
  this.shape_2.setTransform(99.8, 54);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAjBUIgKgjIgxAAIgKAjIgdAAIAzinIAaAAIAyCngAATAXIgThHIgRBHIAkAAg");
  this.shape_3.setTransform(90.825, 54);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAXBUIgyhUIAABUIgdAAIAAinIAdAAIAABIIAvhIIAgAAIg1BOIA6BZg");
  this.shape_4.setTransform(79.7, 54);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAbBUIAAhMIg1AAIAABMIgcAAIAAinIAcAAIAABDIA1AAIAAhDIAcAAIAACng");
  this.shape_5.setTransform(65.975, 54);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AAcBUIAAh6Ig4B6IgcAAIAAinIAdAAIAAB6IA4h6IAcAAIAACng");
  this.shape_6.setTransform(52.25, 54);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BUIAAinIA/AAQAHAAAJACQAIACAHAIQAHAHACAIQACAIAAAHQAAAHgCAHQgCAHgGAHIgFAFIgIADIAAABIAJADIAIAFQAEAEAEAIQADAIAAANQABAIgDAJQgCAKgJAJQgGAFgGADQgHACgGABIgLAAgAgaA7IAaAAIALgBQAFgBAEgEQAEgEABgFIABgKIgBgJQgBgFgEgEQgEgEgFgBQgFgCgGABIgaAAgAgagOIAaAAIAHgBQAFgBAEgEIADgGQACgDAAgGIgBgIQgBgFgDgDQgDgEgFgBQgEgCgFAAIgZAAg");
  this.shape_7.setTransform(39.0042, 53.9958);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAABZQgJAAgKgDQgLgDgKgIQgOgNgGgUQgGgTAAgXQAAgWAGgTQAGgUAOgNQAKgIALgDQAKgDAJAAQAKAAAKADQALADAKAIQAOANAGAUQAGATAAAWQAAAXgGATQgGAUgOANQgKAIgLADQgIADgJAAIgDAAgAAMA9QAGgCAGgHQAFgHADgIQADgJABgKIABgSIgBgRQgBgKgDgJQgDgIgFgHQgGgHgGgCQgGgDgGAAQgEAAgGADQgHACgGAHQgFAHgDAIQgDAJgBAKIgBARIABASQABAKADAJQADAIAFAHQAGAHAHACQAGADAEAAQAGAAAGgDg");
  this.shape_8.setTransform(25.075, 54);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AAbBUIAAhMIg1AAIAABMIgcAAIAAinIAcAAIAABDIA1AAIAAhDIAcAAIAACng");
  this.shape_9.setTransform(11.175, 54);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#E07E22").s().p("AlvFvQiYiXAAjYQAAjXCYiYQCZiYDWAAQDXAACZCYQCYCYAADXQAADYiYCXQiZCZjXAAQjWAAiZiZg");
  this.shape_10.setTransform(52, 52);
  this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));
 }).prototype = getMCSymbolPrototype(lib.orange, new cjs.Rectangle(0, 0, 124.3, 104), null);
 (lib.logo = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgjAxIAShhIA1AAIgCAPIgkAAIgFAZIAiAAIgDANIgiAAIgFAdIAmAAIgDAPg");
  this.shape.setTransform(702.8767, 25.815, 0.4496, 0.4494);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgZAxIAQhSIgbAAIADgPIBGAAIgDAPIgbAAIgPBSg");
  this.shape_1.setTransform(699.651, 25.815, 0.4496, 0.4494);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AglAxIAShfQAIgCAPAAQAQAAAJAGQAJAIAAAMQAAARgNAIQgLAJgSAAIgJAAIgHAlgAgFgiIgGAhIAJABQAKAAAGgGQAHgGAAgIQAAgPgRAAg");
  this.shape_2.setTransform(695.6386, 25.8038, 0.4496, 0.4494);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgjAmQgJgLAAgRQAAgbARgSQAPgOATAAQATAAAKAMQAJAKAAASQAAAcgRARQgNAOgVAAQgSAAgLgMgAgRgUQgJAOAAAPQAAAbAWAAIABAAQAMAAAKgPQAJgOAAgPQAAgbgXAAQgNAAgJAPg");
  this.shape_3.setTransform(691.4126, 25.815, 0.4496, 0.4494);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgRA1IABgJQgNgDgIgJQgLgKABgQQAAgYAQgOQAOgMARAAIACgIIAQAAIgCAJQAOACAJAJQAJAKABARQAAAXgQAOQgNAMgUAAIgBAJgAACAgQANgBAIgKQAJgLAAgQQAAgWgSgDgAgVgVQgJALAAAPQAAALAEAHQAGAHAHABIAMg/QgLABgJAKg");
  this.shape_4.setTransform(686.5011, 25.815, 0.4496, 0.4494);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#005942").s().p("AhzBhQgggkAOg9QAPg5AtglQAugkA6AAQA4AAAdAiQAgAlgOA7QgQA/gyAkQgtAfg2AAQg3AAgdghgAgkg2QgXAXgIAiQgKAoATAXQAOAQAXAAQAdAAAZgYQAagZAJgjQAEgRgCgQQgCgUgKgMQgMgNgXAAQgiAAgZAag");
  this.shape_5.setTransform(625.6631, 14.4061, 0.4496, 0.4494);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#80BC1E").s().p("AguA0QgPgRAIgjQACAZAOAJQAOAJASgIQAsgVALhLQAHAKAAATQAAAKgDAMIgCAIQgFAMgGAKQgLATgRAMQgPALgSAAQgRAAgJgKg");
  this.shape_6.setTransform(625.6455, 14.6758, 0.4496, 0.4494);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#80BC1E").s().p("AhNBxQgZgVAAgnIAAgJIA3AAIAAAEQAAATAMAKQALALAUgBQASAAALgKQAMgLABgWQAAgHgEgGQgDgGgFgCIgMgEQgGgCgIAAIgSAAIAIgpIALAAIAPgDQAJgBAGgEQAGgEAEgHQAFgIAAgKQAAgZggAAQgPAAgMAIQgLAHgFAVIg3AAQAEgYAJgQQAJgQAOgJQAPgKASgEQASgFAVABQAWgBAPAGQAOAEAKAKQAKAJAEAMQAEAKAAAQQAAAKgDAJQgEALgFAHQgEAGgJAHQgIAGgHACQAPACAKAOQAKAOAAAVQAAAXgHARQgJARgOAMQgOALgUAHQgTAFgXAAQgtAAgYgVg");
  this.shape_7.setTransform(700.5951, 14.3612, 0.4496, 0.4494);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#80BC1E").s().p("AhGCBQgNgFgJgKQgJgIgEgNQgEgKAAgPQAAgmAVgWQAWgUAngHIAkgEQAPgBALgEQALgDAEgGQAFgGAAgNQAAgKgEgFQgEgHgFgDQgGgDgGgBIgNgBQgPgBgMAKQgNAIgDAUIg4AAQADgZAKgPQAJgPAOgLQAQgLAQgDQAQgFASABQANAAASACQAOACAPAIQAOAHAIANQAJAOgBAVQAAARgEAaIgUBlIgCAjQAAAHACAIIg8AAIAAgZQgMAQgRAIQgRAHgTAAQgRABgOgGgAATAPIgZACIgRAEQgJADgFAEQgFADgEAJQgEAHAAAMQAAAPAKAGQAKAIAMAAQAOAAAJgFQAJgGAHgIQAEgFAGgNQAEgLACgKIAGgZQgMAJgMABg");
  this.shape_8.setTransform(690.1786, 14.3612, 0.4496, 0.4494);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#80BC1E").s().p("AhnCAIAvj/ICgAAIgKA1IhkAAIglDKg");
  this.shape_9.setTransform(681.0725, 14.3724, 0.4496, 0.4494);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#005942").s().p("AgrB8QgUgIgPgTQgPgSgGgYQgIgZAAgdQAAgdAIgYQAHgZAPgRQAPgSAUgLQAUgLAYABQAagBAUAMQAUALANATQAOAVAGAXQAHAZAAAbIgBANIibAAQABAiANAQQAOAPAZAAQARAAANgLQAOgKADgMIA0AAQgNAugaATQgaAVglgBQgYAAgVgKgAgXhLQgJAHgFAHQgGAJgCAJQgCAGgBALIBgAAQgEgcgLgNQgLgOgWAAQgNAAgKAGg");
  this.shape_10.setTransform(670.6313, 14.3612, 0.4496, 0.4494);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#005942").s().p("AhXCBIgagEIAAg2IAJACIAKAAQAOAAAHgPIADgKIADgaQACgWAAggQABgYAAhJICyAAIAAD/Ig7AAIAAjKIg9AAIgBBDIgDAxQgCASgDASQgFAQgEAHQgHAOgNAIQgOAJgUAAg");
  this.shape_11.setTransform(658.6615, 14.4623, 0.4496, 0.4494);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#005942").s().p("AAuCAIAAisIhRCsIhDAAIAAj/IA5AAIAACsIBRisIBDAAIAAD/g");
  this.shape_12.setTransform(647.3323, 14.3724, 0.4496, 0.4494);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#005942").s().p("AgdCAIAAjKIhHAAIAAg1IDJAAIAAA1IhHAAIAADKg");
  this.shape_13.setTransform(636.5089, 14.3724, 0.4496, 0.4494);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#005942").s().p("ABkCwIAAj5IgBAAIhJD5IgzAAIhJj2IgBAAIAAD2Ig+AAIAAlgIBdAAIBFDyIABAAIBDjyIBdAAIAAFgg");
  this.shape_14.setTransform(611.3106, 12.1817, 0.4496, 0.4494);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.lf(["#FFFFFF", "#F27E20"], [0.612, 0.765], -74.6, -0.1, 71.3, -0.1).s().p("AmcAlQivgDiDhGIWdAAIAABJg");
  this.shape_15.setTransform(656.0125, 26.05);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("ApdBxQiKhMhXiUIZ9AAIAADgg");
  this.shape_16.setTransform(644.775, 11.05);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_16
   }, {
    t: this.shape_15
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(561.7, -0.2, 166.19999999999993, 30), null);
 (lib.l4 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AgEAFIAAgJIAJAAIAAAJg");
  this.shape.setTransform(604.425, 83.575);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_1.setTransform(600.675, 81.15);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AgKAcQgFgCgDgIQgCgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgDAGQgCAIgEACQgGADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgCAFABAIIABANQABAFACACQADADAEAAQAEAAADgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_2.setTransform(595.6, 81.15);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AAKAdIgOgdIgGAIIAAAVIgIAAIAAg5IAIAAIAAAbIATgbIAKAAIgSAWIASAjg");
  this.shape_3.setTransform(591.15, 81.15);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgLAAIAAg5IAIAAIAAAsIAAAHIABgHIATgsIALAAIAAA5g");
  this.shape_4.setTransform(586, 81.15);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAlAAIAAAHIgOAAIAAAyg");
  this.shape_5.setTransform(581.45, 81.15);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgDgGAAgMQAAgeASAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAFACADQACACAEAAQAKAAAAgOIAHAAQAAAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgBgFgHAAQgFAAgBAFg");
  this.shape_6.setTransform(577.25, 81.15);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABANIACgNIALglIANAAIAAA5g");
  this.shape_7.setTransform(571.825, 81.15);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgKAAIAAg5IAIAAIAAAsIgBAHIACgHIASgsIAKAAIAAA5g");
  this.shape_8.setTransform(566.05, 81.15);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_9.setTransform(561.225, 81.15);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgZAEIAAgHIAzAAIAAAHg");
  this.shape_10.setTransform(553.95, 80.825);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgLAcQgEgCgCgIQgDgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgCAGQgDAIgEACQgFADgHAAQgGAAgFgDgAgGgUQgDACgBAGQgBAFgBAIIABANQACAFADACQADADADAAQAEAAADgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgDADg");
  this.shape_11.setTransform(546.4, 81.15);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_12.setTransform(541.725, 81.15);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAnAAIAAAHIgPAAIAAAyg");
  this.shape_13.setTransform(537.3, 81.15);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_14.setTransform(533.175, 81.15);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAEAEQAEAFACAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAJAAAAgOIAJAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgCAFg");
  this.shape_15.setTransform(528.6, 81.15);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAbAlIAAgQIg9AAIAAg5IAJAAIAAAzIATAAIAAgzIAHAAIAAAzIATAAIAAgzIAJAAIAAAzIAGAAIAAAWg");
  this.shape_16.setTransform(522.85, 81.95);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgJAcQgEgCgDgIQgCgGAAgMQABgeARAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAFACADQACACAEAAQAKAAgBgOIAIAAQAAAGgBAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgJgCgEQgBgFgHAAQgFAAgCAFg");
  this.shape_17.setTransform(516.4, 81.15);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_18.setTransform(512.075, 81.15);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AgJAcQgEgCgDgIQgBgGAAgMQAAgeARAAQAJAAADAEQAFAFABAGIABAQIgcAAIABANQABAFACADQACACAEAAQAJAAAAgOIAJAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgJgCgEQgCgFgGAAQgFAAgCAFg");
  this.shape_19.setTransform(504.85, 81.15);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AgJAcQgEgCgDgIQgBgGAAgMQAAgeARAAQAJAAADAEQAFAFABAGIABAQIgcAAIABANQABAFACADQACACAEAAQAJAAAAgOIAJAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgJgCgEQgCgFgGAAQgFAAgCAFg");
  this.shape_20.setTransform(500.35, 81.15);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AAbAlIAAgQIg9AAIAAg5IAJAAIAAAzIATAAIAAgzIAHAAIAAAzIATAAIAAgzIAJAAIAAAzIAGAAIAAAWg");
  this.shape_21.setTransform(494.6, 81.95);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AgFAZQgGgIAAgPIgKAAIAAAbIgIAAIAAg5IAIAAIAAAYIAKAAQAAgMAGgHQAFgHAJAAQALAAAFAIQAFAIAAANQAAALgCAIQgDAHgEADQgFADgHAAQgJAAgFgGgAACgUQgCACgBAGQgBAFAAAIQAAALACAGQACAGAHAAQAHAAADgGQACgGAAgLQAAgNgCgFQgDgGgHAAQgEAAgDADg");
  this.shape_22.setTransform(487.025, 81.15);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AgTAnIAAgIQADABADABQAEAAACgDQADgEABgFIgSg7IAIAAIANAtIABAAIANgtIAIAAIgSA6IgEALQgBAEgDACQgEADgFAAIgGgBg");
  this.shape_23.setTransform(480.975, 82.15);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_24.setTransform(476.675, 81.15);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAmAAIAAAHIgQAAIAAAyg");
  this.shape_25.setTransform(472.25, 81.15);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_26.setTransform(468.125, 81.15);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AALAnIAAgsIABgHIgCAHIgTAsIgKAAIAAg6IAIAAIAAAsIAAAHIABgHIATgsIAKAAIAAA6gAgJgcQgDgDAAgHIAEAAQABAHAHAAQAEAAACgBQADgCAAgEIAFAAQgBAHgEADQgDADgGAAQgFAAgEgDg");
  this.shape_27.setTransform(463.3, 80.225);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAEAEQAEAFACAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAJAAAAgOIAJAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgCAFg");
  this.shape_28.setTransform(458.4, 81.15);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AAXAxIAAgTIgtAAIAAATIgIAAIAAgbIAFAAQAEgGACgHQACgHAAgIIABgWIAAgUIApAAIAABGIAGAAIAAAbgAgHgTIgBARIgDANIgEALIAfAAIAAg+IgXAAg");
  this.shape_29.setTransform(452.975, 81.075);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AgEAFIAAgJIAJAAIAAAJg");
  this.shape_30.setTransform(443.625, 83.575);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_31.setTransform(439.525, 81.175);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#0C593C").s().p("AgTAnIAAgIQADABADABQAEAAACgDQADgEABgFIgSg7IAIAAIANAtIABAAIANgtIAIAAIgSA6IgEALQgBAEgDACQgEADgFAAIgGgBg");
  this.shape_32.setTransform(434.975, 82.15);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_33.setTransform(430.575, 81.15);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_34.setTransform(425.775, 81.15);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#0C593C").s().p("AgUAPQABgFABgDQACgEADgCIAJgDIAJgFQACgBAAgFQAAgGgCgBQgCgDgEAAQgFAAgCADQgCADAAAFIgHAAQAAgSARAAQAEAAAEACQAEACACAEQABADAAAEIAAAiQAAAEADABIADAAIAAAFIgEABQgEAAgCgCQgCgBgBgFQgBADgEADQgDADgEAAQgQAAAAgQgAAAAAIgFAEIgEAEQgBACAAAFQgBAIAJABQAEgBADgDIABgCIABgDIAAgGIAAgKIgHABg");
  this.shape_35.setTransform(421, 81.15);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#0C593C").s().p("AAJAdIgNgdIgGAIIAAAVIgJAAIAAg5IAJAAIAAAbIATgbIAKAAIgTAWIATAjg");
  this.shape_36.setTransform(416.85, 81.15);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGgBgMQAAgeATAAQAIAAAEAEQADAFABAGIACAQIgcAAIABANQAAAFADADQACACAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgBgFgGAAQgGAAgBAFg");
  this.shape_37.setTransform(409.5, 81.15);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABANIACgNIALglIANAAIAAA5g");
  this.shape_38.setTransform(404.075, 81.15);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAFgCABAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgEADgFAAQgDAAgDgCQgDgCgCgEIAAAagAgJgZQgBAGAAALIAAALQABAFACADQACAEAFAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_39.setTransform(398.4, 82.075);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#0C593C").s().p("AgLAcQgEgCgDgIQgCgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgDAGQgCAIgEACQgGADgGAAQgGAAgFgDgAgGgUQgDACgBAGQgBAFgBAIIABANQACAFADACQADADADAAQAEAAADgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgDADg");
  this.shape_40.setTransform(393.2, 81.15);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#0C593C").s().p("AgDAyIAAgaIgGAFQgCACgFAAQgHAAgEgEQgEgFgCgGQgCgIAAgIQAAgIACgIQACgGAEgEQAFgEAHAAQAEAAADACQADACACAEIAAgaIAHAAIAAAbQACgEADgDQAEgCADAAQALAAAEAJQAFAHAAAOQAAAfgTAAQgEAAgDgCIgGgFIAAAagAAGgQQgCAHAAAJQAAALACAGQADAHAGAAQAHAAACgGQADgHAAgLQAAgXgMAAQgHAAgCAHgAgaAAQAAALADAGQACAHAHAAQAFAAACgEQADgDAAgFIABgMQAAgJgCgHQgCgHgHAAQgMAAAAAXg");
  this.shape_41.setTransform(386.675, 81.15);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_42.setTransform(378.125, 81.15);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAEAEQAEAFACAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgBAFg");
  this.shape_43.setTransform(370.9, 81.15);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#0C593C").s().p("AAJAdIgNgdIgGAIIAAAVIgIAAIAAg5IAIAAIAAAbIATgbIAKAAIgTAWIATAjg");
  this.shape_44.setTransform(366.8, 81.15);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_45.setTransform(361.675, 81.15);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAZIAMAAQAFAAACACQAEABACAEQACAEAAAFQAAAEgCAFQgCADgEACQgCACgFAAgAgSAXIAJAAQAGAAACgDQACgCAAgFQAAgLgJAAIgKAAg");
  this.shape_46.setTransform(355.775, 81.15);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAEgCADAAQATAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgCgEIAAAagAgIgZQgCAGAAALIAAALQABAFACADQACAEAFAAQAGAAADgGQACgHAAgLQAAgXgLAAQgGAAgCAHg");
  this.shape_47.setTransform(349.95, 82.075);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#0C593C").s().p("AgTAPQgBgFACgDQACgEADgCIAJgDIAJgFQACgBAAgFQAAgGgCgBQgCgDgEAAQgFAAgCADQgBADgBAFIgHAAQAAgSARAAQAFAAADACQAEACACAEQACADAAAEIAAAiQAAAEACABIACAAIAAAFIgDABQgEAAgCgCQgCgBgBgFQgCADgEADQgCADgEAAQgPAAAAgQgAAAAAIgFAEIgEAEQgCACABAFQgBAIAJABQADgBAEgDIABgCIABgDIAAgGIAAgKIgHABg");
  this.shape_48.setTransform(342.6, 81.15);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_49.setTransform(337.825, 81.15);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#0C593C").s().p("AAOAdIgOgXIgNAXIgJAAIASgdIgRgcIAJAAIANAWIAMgWIAJAAIgRAcIARAdg");
  this.shape_50.setTransform(328.15, 81.15);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAZIAMAAQAFAAACACQAEABACAEQACAEAAAFQAAAEgCAFQgCADgEACQgCACgFAAgAgSAXIAJAAQAGAAACgDQACgCAAgFQAAgLgJAAIgKAAg");
  this.shape_51.setTransform(322.525, 81.15);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_52.setTransform(316.625, 81.15);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_53.setTransform(311.575, 81.15);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAEAEQAFAFABAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAJAAAAgOIAJAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgCAFg");
  this.shape_54.setTransform(306.75, 81.15);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_55.setTransform(301.675, 81.175);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_56.setTransform(297.325, 81.15);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#0C593C").s().p("AgUAPQAAgFACgDQABgEAEgCIAIgDIAKgFQACgBAAgFQAAgGgCgBQgCgDgEAAQgEAAgCADQgCADgBAFIgHAAQAAgSARAAQAEAAAFACQADACABAEQACADAAAEIAAAiQAAAEAEABIACAAIAAAFIgEABQgEAAgCgCQgCgBgBgFQgCADgDADQgDADgEAAQgQAAAAgQgAABAAIgGAEIgEAEQgCACAAAFQABAIAHABQAFgBACgDIACgCIABgDIAAgGIAAgKIgGABg");
  this.shape_57.setTransform(292.6, 81.15);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAlAAIAAAHIgPAAIAAAyg");
  this.shape_58.setTransform(288.4, 81.15);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_59.setTransform(284.275, 81.15);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgWIAFAAIAFgKIACgKIAAgMIAAgTIAfAAIAAAzIAGAAIAAAWgAgEgMQAAAIgBAFIgFAOIAVAAIAAgsIgPAAg");
  this.shape_60.setTransform(279.375, 81.95);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGgBgMQAAgeATAAQAIAAAEAEQADAFABAGIACAQIgcAAIABANQAAAFADADQACACAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgBgFgGAAQgGAAgBAFg");
  this.shape_61.setTransform(274.5, 81.15);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAEgCADAAQATAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgCgEIAAAagAgIgZQgCAGAAALIAAALQABAFADADQABAEAFAAQAGAAADgGQACgHAAgLQAAgXgLAAQgGAAgCAHg");
  this.shape_62.setTransform(269.85, 82.075);
  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_63.setTransform(264.675, 81.15);
  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#0C593C").s().p("AgEAIQAEgBAAgJIgEAAIAAgKIAJAAIAAAMQAAAEgDAEQgCADgEACg");
  this.shape_64.setTransform(258.475, 84.35);
  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_65.setTransform(255.125, 81.15);
  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAlAAIAAAHIgOAAIAAAyg");
  this.shape_66.setTransform(250.7, 81.15);
  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_67.setTransform(246.575, 81.15);
  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgWIAFAAIAFgKIACgKIAAgMIAAgTIAfAAIAAAzIAGAAIAAAWgAgEgMQAAAIgBAFIgFAOIAVAAIAAgsIgPAAg");
  this.shape_68.setTransform(241.675, 81.95);
  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAFAEQADAFACAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgBAFg");
  this.shape_69.setTransform(236.8, 81.15);
  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAFgCABAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgEADgFAAQgDAAgDgCQgDgCgCgEIAAAagAgIgZQgCAGAAALIAAALQABAFACADQADAEAEAAQAGAAADgGQACgHAAgLQAAgXgLAAQgGAAgCAHg");
  this.shape_70.setTransform(232.15, 82.075);
  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgHQgBgGAAgJQAAgfATAAQAJAAAEAGQAFAFAAAJIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_71.setTransform(227.275, 81.15);
  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#0C593C").s().p("AAOAdIgOgXIgNAXIgIAAIASgdIgRgcIAIAAIAMAWIANgWIAJAAIgRAcIASAdg");
  this.shape_72.setTransform(220.3, 81.15);
  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAZIAMAAQAFAAACACQAEABACAEQACAEAAAFQAAAEgCAFQgCADgEACQgCACgFAAgAgSAXIAJAAQAGAAACgDQACgCAAgFQAAgLgJAAIgKAAg");
  this.shape_73.setTransform(214.675, 81.15);
  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_74.setTransform(208.775, 81.15);
  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_75.setTransform(203.725, 81.15);
  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#0C593C").s().p("AgLAcQgEgCgCgIQgDgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgCAGQgDAIgEACQgFADgHAAQgGAAgFgDgAgGgUQgDACgBAGQgCAFAAAIIABANQACAFADACQADADADAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgCgDgFAAQgDAAgDADg");
  this.shape_76.setTransform(198.65, 81.15);
  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#0C593C").s().p("AgOAdIAAg5IAdAAIAAAHIgVAAIAAAyg");
  this.shape_77.setTransform(194.6, 81.15);
  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#0C593C").s().p("AgKAcQgFgCgCgIQgDgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgDAGQgCAIgFACQgEADgHAAQgGAAgEgDgAgHgUQgCACgBAGQgBAFAAAIIABANQABAFACACQADADAEAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgCgDgFAAQgEAAgDADg");
  this.shape_78.setTransform(189.85, 81.15);
  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIAAAAQACgEAEgCQADgCACAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgEADgFAAQgDAAgDgCQgDgCgDgEIAAAagAgJgZQgCAGAAALIABALQABAFADADQACAEAEAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_79.setTransform(184.85, 82.075);
  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_80.setTransform(180.25, 81.15);
  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAFAEQADAFACAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgBAFg");
  this.shape_81.setTransform(176.05, 81.15);
  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_82.setTransform(171.725, 81.15);
  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_83.setTransform(164.85, 81.15);
  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#0C593C").s().p("AgLAcQgEgCgCgIQgDgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgCAGQgDAIgEACQgFADgHAAQgGAAgFgDgAgGgUQgDACgBAGQgCAFAAAIIABANQACAFADACQADADADAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgCgDgFAAQgDAAgDADg");
  this.shape_84.setTransform(160.4, 81.15);
  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f("#0C593C").s().p("AgJAcQgEgCgCgIQgCgGAAgMQgBgeATAAQAHAAAEAEQAEAFACAGIABAQIgcAAIABANQAAAFADADQACACAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgGgSQgDAFAAAIIATAAQAAgJgCgEQgCgFgFAAQgGAAgBAFg");
  this.shape_85.setTransform(153.1, 81.15);
  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgKAAIAAg5IAIAAIAAAsIgBAHIACgHIASgsIALAAIAAA5g");
  this.shape_86.setTransform(148.35, 81.15);
  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f("#0C593C").s().p("AAKAdIAAgbIgMABQgIAAgDgDQgEgFAAgGIAAgRIAJAAIAAARQAAAEACACQABACAFAAIAKAAIAAgZIAIAAIAAA5g");
  this.shape_87.setTransform(143.3, 81.15);
  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgKAAIAAg5IAHAAIAAAsIAAAHIACgHIASgsIALAAIAAA5g");
  this.shape_88.setTransform(138.35, 81.15);
  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_89.setTransform(132.875, 81.175);
  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAnAAIAAAHIgQAAIAAAyg");
  this.shape_90.setTransform(128.7, 81.15);
  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f("#0C593C").s().p("AgKAcQgFgCgCgIQgDgGAAgMQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAAMgDAGQgCAIgFACQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgBAFAAAIIABANQABAFACACQADADAEAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_91.setTransform(124.25, 81.15);
  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFABIAAABQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgFQAAgGgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_92.setTransform(117.125, 81.15);
  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f("#0C593C").s().p("AgEAIQAEgBAAgJIgEAAIAAgKIAJAAIAAAMQAAAEgDAEQgCADgEACg");
  this.shape_93.setTransform(712.075, 73.9);
  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f("#0C593C").s().p("AgLAlQgFgDgDgHQgCgGgBgHIgBgOQAAgLACgJQACgJAGgGQAFgFAJAAQAIAAAFADQAFADACAGQADAGAAAHIgJAAQAAgSgOAAQgJAAgDAKQgCAJAAANIAAANIACAKQABAFAEADQADADAEAAQAFAAADgDQADgCABgFIACgMIAJAAQgBAKgCAGQgCAHgFADQgEAEgIAAQgIAAgFgEg");
  this.shape_94.setTransform(708.025, 69.725);
  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f("#0C593C").s().p("AgbAoIAAgIIADAAQAEAAACgEQACgEAAgHIABgVIAAgjIArAAIAABOIgJAAIAAhGIgZAAIAAAfIgBAPIgCAMQgBAGgDAEQgEADgFAAIgFAAg");
  this.shape_95.setTransform(701.625, 69.725);
  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f("#0C593C").s().p("AgWAnIAAhNIAWAAQAKgBAHAGQAGAFAAALQAAAHgCAFQgCAEgDACQgDADgFABIgJABIgMAAIAAAhgAgNgBIAIAAIAKgBQAEgBACgEQACgDABgHQgBgIgEgCQgDgEgIAAIgLAAg");
  this.shape_96.setTransform(696.2, 69.7);
  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f("#0C593C").s().p("AgUAnIAAhNIApAAIAAAHIggAAIAABGg");
  this.shape_97.setTransform(690.975, 69.7);
  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABAMIACgMIALglIANAAIAAA5g");
  this.shape_98.setTransform(682.475, 70.7);
  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAZIAMAAQAFAAACACQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEABQgCACgFAAgAgSAXIAJAAQAGAAACgDQACgCAAgGQAAgJgJgBIgKAAg");
  this.shape_99.setTransform(675.875, 70.7);
  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_100.setTransform(669.975, 70.7);
  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_101.setTransform(664.925, 70.7);
  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f("#0C593C").s().p("AgUAPQABgFABgDQABgEAEgCIAJgDIAJgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgFAAgBADQgDACAAAGIgHAAQAAgSARAAQAEAAAEACQAEACABADQACAEAAAEIAAAiQAAAFAEAAIACAAIAAAFIgEABQgEAAgCgCQgCgBgBgGQgCAFgDACQgDADgEAAQgQAAAAgQgAABAAIgGAEIgEAEQgCADAAAEQAAAIAIABQAEAAADgEIACgCIABgDIAAgGIAAgKIgGABg");
  this.shape_102.setTransform(660.15, 70.7);
  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgWIAFAAIAFgLIACgJIAAgMIAAgTIAfAAIAAAzIAGAAIAAAWgAgEgNQAAAJgBAFIgFAOIAVAAIAAgsIgPAAg");
  this.shape_103.setTransform(655.275, 71.5);
  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgCAFABAIIABANQABAFACACQAEADADAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgEADg");
  this.shape_104.setTransform(647.7, 70.7);
  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f("#0C593C").s().p("AAPAnIAAhGIgdAAIAABGIgJAAIAAhNIAvAAIAABNg");
  this.shape_105.setTransform(642.025, 69.7);
  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f("#0C593C").s().p("AgEAFIAAgJIAJAAIAAAJg");
  this.shape_106.setTransform(635.225, 73.125);
  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f("#0C593C").s().p("AgJAcQgEgDgCgHQgDgHAAgLQAAgeASAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAAAgOIAHAAQAAAGgBAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgGgSQgDAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgBAFg");
  this.shape_107.setTransform(631.7, 70.7);
  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_108.setTransform(627.55, 70.7);
  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAEgCACAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgEADgFAAQgDAAgDgCQgDgCgCgEIAAAagAgIgZQgCAGAAALIAAALQABAFACADQACAEAFAAQAGAAADgGQACgHAAgLQAAgXgLAAQgGAAgCAHg");
  this.shape_109.setTransform(623.2, 71.625);
  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgCAFABAIIABANQABAFACACQAEADADAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgEADg");
  this.shape_110.setTransform(618, 70.7);
  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#0C593C").s().p("AgDAnIAAgJIgDAAQgHAAgHgDQgGgEgEgGQgEgIAAgJQAAgKAEgHQAEgHAGgDQAHgDAHgBIADAAIAAgHIAHAAIAAAHIADAAQAHABAGADQAHADAEAHQAEAHAAAKQAAAJgEAIQgEAGgGAEQgHADgIAAIgCAAIAAAJgAAEAWIADAAQAFAAAFgDQAEgCACgGQADgEAAgHQAAgLgFgGQgGgGgIAAIgDAAgAgQgUQgEACgCAFQgDAGAAAHQAAAHADAEQACAGAEACQAFADAFAAIADAAIAAgtIgDAAQgFAAgFADg");
  this.shape_111.setTransform(611.675, 69.7);
  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f("#0C593C").s().p("AgJAdQgEgCgCgEQgCgFgBgHIAIAAIABAIIAEAEIAFABQALAAgBgLQAAgFgCgDQgDgDgFAAIgDAAIAAgFIADAAQAEgBACgDQADgCAAgFQAAgEgCgCQgDgDgEAAQgEAAgDADQgCADAAAFIgIAAQAAgFADgEQACgEAEgCQAEgDAEAAQAFAAAEACQAEACACADQADAEgBAEQAAAFgCAEQgDAEgFACQAFAAADADQAEAEAAAHQAAAFgDAEQgCAEgEACQgEACgGAAQgEAAgFgCg");
  this.shape_112.setTransform(603.25, 70.7);
  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f("#0C593C").s().p("AgTAPQAAgFABgDQABgEAEgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgFAAgCADQgBACAAAGIgIAAQAAgSARAAQAFAAAEACQADACABADQADAEAAAEIAAAiQAAAFACAAIACAAIAAAFIgDABQgEAAgCgCQgCgBgBgGQgBAFgFACQgCADgEAAQgPAAAAgQgAABAAIgGAEIgEAEQgBADAAAEQAAAIAIABQADAAADgEIACgCIABgDIAAgGIAAgKIgGABg");
  this.shape_113.setTransform(598.9, 70.7);
  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f("#0C593C").s().p("AgOAdIAAg5IAeAAIAAAHIgWAAIAAAyg");
  this.shape_114.setTransform(595.15, 70.7);
  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgCgHAAgLQABgeARAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAgBgOIAIAAQAAAGgBAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_115.setTransform(590.65, 70.7);
  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_116.setTransform(585.575, 70.725);
  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgKAAIAAg5IAIAAIAAAsIgBAHIACgHIASgsIALAAIAAA5g");
  this.shape_117.setTransform(580.8, 70.7);
  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_118.setTransform(576.25, 70.7);
  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f("#0C593C").s().p("AgKAcQgFgDgCgHQgDgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgCAHQgDAHgFADQgEADgHAAQgGAAgEgDgAgHgUQgCACgBAGQgCAFAAAIIACANQABAFACACQADADAEAAQAEAAAEgDQACgCABgFIABgNIgBgNQgBgGgDgCQgCgDgFAAQgEAAgDADg");
  this.shape_119.setTransform(571.8, 70.7);
  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f("#0C593C").s().p("AAZAnIAAhAIAAgFIAAgEIgCAFIgCAFIgQA/IgKAAIgQhAIgCgJIgBAAIAAAFIABAEIAABAIgJAAIAAhNIAPAAIAQA8IABAMIAAAAIACgMIAQg8IAPAAIAABNg");
  this.shape_120.setTransform(565.25, 69.7);
  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f("#0C593C").s().p("AgUAPQABgFABgDQACgEADgCIAJgDIAJgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgDADQgCACAAAGIgHAAQAAgSARAAQAEAAAEACQAEACACADQABAEAAAEIAAAiQAAAFADAAIADAAIAAAFIgEABQgEAAgCgCQgCgBgBgGQgBAFgEACQgDADgEAAQgQAAAAgQgAAAAAIgFAEIgEAEQgBADgBAEQAAAIAJABQADAAAEgEIABgCIABgDIAAgGIAAgKIgHABg");
  this.shape_121.setTransform(556.55, 70.7);
  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAmAAIAAAHIgQAAIAAAyg");
  this.shape_122.setTransform(552.35, 70.7);
  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f("#0C593C").s().p("AgUAPQAAgFACgDQABgEAEgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgCADQgCACgBAGIgHAAQAAgSARAAQAEAAAFACQADACABADQACAEAAAEIAAAiQAAAFAEAAIACAAIAAAFIgEABQgEAAgCgCQgCgBgBgGQgCAFgDACQgDADgEAAQgQAAAAgQgAABAAIgGAEIgEAEQgCADAAAEQABAIAHABQAFAAACgEIACgCIABgDIAAgGIAAgKIgGABg");
  this.shape_123.setTransform(548.2, 70.7);
  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIAAAAQACgEAEgCQADgCACAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgEADgFAAQgDAAgDgCQgDgCgDgEIAAAagAgJgZQgCAGAAALIABALQABAFADADQACAEAEAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_124.setTransform(543.5, 71.625);
  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f("#0C593C").s().p("AgTAPQAAgFABgDQABgEAEgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgCADQgCACAAAGIgIAAQAAgSARAAQAFAAAEACQADACABADQADAEAAAEIAAAiQAAAFADAAIABAAIAAAFIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAAAAAIgFAEIgEAEQgBADAAAEQAAAIAIABQADAAADgEIACgCIABgDIAAgGIAAgKIgHABg");
  this.shape_125.setTransform(538.6, 70.7);
  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_126.setTransform(533.825, 70.7);
  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgCgHAAgLQABgeARAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAgBgOIAIAAQAAAGgBAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_127.setTransform(529, 70.7);
  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIAAAAQACgEAEgCQADgCADAAQATAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgDgEIAAAagAgIgZQgDAGAAALIABALQABAFADADQABAEAFAAQAGAAADgGQACgHAAgLQAAgXgLAAQgGAAgCAHg");
  this.shape_128.setTransform(524.35, 71.625);
  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_129.setTransform(519.175, 70.7);
  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f("#0C593C").s().p("AgFAZQgGgIAAgPIgKAAIAAAbIgIAAIAAg5IAIAAIAAAYIAKAAQAAgMAGgHQAFgHAJAAQALAAAFAIQAFAIAAANQAAALgCAIQgDAHgEADQgFADgHAAQgJAAgFgGgAACgUQgCACgBAGQgBAFAAAIQAAALACAGQACAGAHAAQAHAAADgGQACgFAAgMQAAgMgCgGQgDgGgHAAQgEAAgDADg");
  this.shape_130.setTransform(510.775, 70.7);
  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgTArIgJAAIAAg5IAIAAIAAAsIgBAHIACgHIASgsIAKAAIAAA5g");
  this.shape_131.setTransform(504.5, 70.7);
  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_132.setTransform(499.375, 70.7);
  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f("#0C593C").s().p("AgJAcQgEgDgCgHQgCgHgBgLQAAgeATAAQAIAAAEAEQADAFABAGIACAQIgcAAIABANQAAAEADADQACADAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgIgCgFQgBgFgGAAQgGAAgBAFg");
  this.shape_133.setTransform(494.55, 70.7);
  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_134.setTransform(489.825, 70.7);
  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f("#0C593C").s().p("AgJAcQgEgDgCgHQgDgHAAgLQAAgeASAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAAAgOIAHAAQAAAGgBAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgGgSQgDAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgBAFg");
  this.shape_135.setTransform(485, 70.7);
  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABAMIACgMIALglIANAAIAAA5g");
  this.shape_136.setTransform(479.575, 70.7);
  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgKAAIAAg5IAIAAIAAAsIgBAHIACgHIASgsIAKAAIAAA5g");
  this.shape_137.setTransform(473.8, 70.7);
  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAEgCADAAQATAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgCgEIAAAagAgIgZQgCAGAAALIAAALQABAFACADQACAEAFAAQAGAAADgGQACgHAAgLQAAgXgLAAQgGAAgCAHg");
  this.shape_138.setTransform(468.75, 71.625);
  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_139.setTransform(463.575, 70.7);
  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f("#0C593C").s().p("AgTAmIAAgHQADABADABQAEAAACgEQADgCABgHIgSg6IAIAAIANAtIABAAIANgtIAIAAIgSA6IgEALQgBAEgDACQgEADgFAAIgGgCg");
  this.shape_140.setTransform(456.275, 71.7);
  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABAMIACgMIALglIANAAIAAA5g");
  this.shape_141.setTransform(450.875, 70.7);
  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgBAFAAAIIABANQABAFACACQADADAEAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_142.setTransform(445.1, 70.7);
  this.shape_143 = new cjs.Shape();
  this.shape_143.graphics.f("#0C593C").s().p("AAKAdIgOgdIgHAIIAAAVIgIAAIAAg5IAIAAIAAAbIAUgbIAKAAIgSAWIATAjg");
  this.shape_143.setTransform(440.65, 70.7);
  this.shape_144 = new cjs.Shape();
  this.shape_144.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_144.setTransform(435.825, 70.7);
  this.shape_145 = new cjs.Shape();
  this.shape_145.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_145.setTransform(431.025, 70.7);
  this.shape_146 = new cjs.Shape();
  this.shape_146.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgTArIgKAAIAAg5IAIAAIAAAsIAAAHIABgHIATgsIAKAAIAAA5g");
  this.shape_146.setTransform(425.95, 70.7);
  this.shape_147 = new cjs.Shape();
  this.shape_147.graphics.f("#0C593C").s().p("AAOAlIAAgQIgjAAIAAg5IAJAAIAAAzIAUAAIAAgzIAIAAIAAAzIAGAAIAAAWg");
  this.shape_147.setTransform(420.975, 71.5);
  this.shape_148 = new cjs.Shape();
  this.shape_148.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgTArIgKAAIAAg5IAIAAIAAAsIAAAHIABgHIATgsIAKAAIAAA5g");
  this.shape_148.setTransform(415.6, 70.7);
  this.shape_149 = new cjs.Shape();
  this.shape_149.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgWIAFAAIAFgLIACgJIAAgMIAAgTIAfAAIAAAzIAGAAIAAAWgAgEgNQAAAJgBAFIgFAOIAVAAIAAgsIgPAAg");
  this.shape_149.setTransform(410.375, 71.5);
  this.shape_150 = new cjs.Shape();
  this.shape_150.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgCgHAAgLQABgeARAAQAJAAADAEQAFAFABAGIAAAQIgbAAIABANQABAEACADQACADAEAAQAJAAAAgOIAIAAQABAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_150.setTransform(405.5, 70.7);
  this.shape_151 = new cjs.Shape();
  this.shape_151.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABAMIACgMIALglIANAAIAAA5g");
  this.shape_151.setTransform(400.075, 70.7);
  this.shape_152 = new cjs.Shape();
  this.shape_152.graphics.f("#0C593C").s().p("AgLAcQgEgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgEADQgGADgGAAQgGAAgFgDgAgGgUQgDACgBAGQgBAFAAAIIAAANQACAFADACQADADADAAQAEAAADgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgDADg");
  this.shape_152.setTransform(391.85, 70.7);
  this.shape_153 = new cjs.Shape();
  this.shape_153.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_153.setTransform(386.775, 70.7);
  this.shape_154 = new cjs.Shape();
  this.shape_154.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgTArIgKAAIAAg5IAIAAIAAAsIAAAHIABgHIATgsIALAAIAAA5g");
  this.shape_154.setTransform(379.25, 70.7);
  this.shape_155 = new cjs.Shape();
  this.shape_155.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgTArIgKAAIAAg5IAJAAIAAAsIgBAHIABgHIATgsIAKAAIAAA5g");
  this.shape_155.setTransform(374.1, 70.7);
  this.shape_156 = new cjs.Shape();
  this.shape_156.graphics.f("#0C593C").s().p("AAOAlIAAgQIgjAAIAAg5IAJAAIAAAzIAUAAIAAgzIAIAAIAAAzIAGAAIAAAWg");
  this.shape_156.setTransform(369.125, 71.5);
  this.shape_157 = new cjs.Shape();
  this.shape_157.graphics.f("#0C593C").s().p("AAJAdIgNgdIgHAIIAAAVIgIAAIAAg5IAIAAIAAAbIAUgbIAKAAIgTAWIAUAjg");
  this.shape_157.setTransform(364.4, 70.7);
  this.shape_158 = new cjs.Shape();
  this.shape_158.graphics.f("#0C593C").s().p("AgTAmIAAgHQADABADABQAEAAACgEQADgCABgHIgSg6IAIAAIANAtIABAAIANgtIAIAAIgSA6IgEALQgBAEgDACQgEADgFAAIgGgCg");
  this.shape_158.setTransform(359.475, 71.7);
  this.shape_159 = new cjs.Shape();
  this.shape_159.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIAAAAQACgEAEgCQADgCACAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgDgEIAAAagAgJgZQgCAGAAALIABALQABAFACADQADAEAEAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_159.setTransform(354.85, 71.625);
  this.shape_160 = new cjs.Shape();
  this.shape_160.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_160.setTransform(350.25, 70.7);
  this.shape_161 = new cjs.Shape();
  this.shape_161.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_161.setTransform(346.125, 70.7);
  this.shape_162 = new cjs.Shape();
  this.shape_162.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_162.setTransform(341.325, 70.7);
  this.shape_163 = new cjs.Shape();
  this.shape_163.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgLAAIAAg5IAIAAIAAAsIAAAHIABgHIATgsIALAAIAAA5g");
  this.shape_163.setTransform(336.25, 70.7);
  this.shape_164 = new cjs.Shape();
  this.shape_164.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgTArIgKAAIAAg5IAJAAIAAAsIgBAHIACgHIASgsIAKAAIAAA5g");
  this.shape_164.setTransform(328.65, 70.7);
  this.shape_165 = new cjs.Shape();
  this.shape_165.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABAMIACgMIALglIANAAIAAA5g");
  this.shape_165.setTransform(322.825, 70.7);
  this.shape_166 = new cjs.Shape();
  this.shape_166.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAZIAMAAQAFAAACACQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEABQgCACgFAAgAgSAXIAJAAQAGAAACgDQACgCAAgGQAAgJgJgBIgKAAg");
  this.shape_166.setTransform(316.225, 70.7);
  this.shape_167 = new cjs.Shape();
  this.shape_167.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_167.setTransform(310.325, 70.7);
  this.shape_168 = new cjs.Shape();
  this.shape_168.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_168.setTransform(305.275, 70.7);
  this.shape_169 = new cjs.Shape();
  this.shape_169.graphics.f("#0C593C").s().p("AgUAPQABgFABgDQACgEADgCIAJgDIAJgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgDADQgCACAAAGIgHAAQAAgSARAAQAEAAAEACQAEACACADQABAEAAAEIAAAiQAAAFADAAIADAAIAAAFIgEABQgEAAgCgCQgCgBgBgGQgBAFgEACQgDADgEAAQgQAAAAgQgAAAAAIgFAEIgEAEQgBADgBAEQAAAIAIABQAEAAAEgEIABgCIABgDIAAgGIAAgKIgHABg");
  this.shape_169.setTransform(300.5, 70.7);
  this.shape_170 = new cjs.Shape();
  this.shape_170.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgWIAFAAIAFgLIACgJIAAgMIAAgTIAfAAIAAAzIAGAAIAAAWgAgEgNQAAAJgBAFIgFAOIAVAAIAAgsIgPAAg");
  this.shape_170.setTransform(295.625, 71.5);
  this.shape_171 = new cjs.Shape();
  this.shape_171.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_171.setTransform(288.375, 70.7);
  this.shape_172 = new cjs.Shape();
  this.shape_172.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgKAAIAAg5IAIAAIAAAsIgBAHIACgHIASgsIAKAAIAAA5g");
  this.shape_172.setTransform(281.1, 70.7);
  this.shape_173 = new cjs.Shape();
  this.shape_173.graphics.f("#0C593C").s().p("AALAdIAAgrIABgHIgCAHIgSArIgLAAIAAg5IAIAAIAAAsIAAAHIABgHIATgsIALAAIAAA5g");
  this.shape_173.setTransform(275.95, 70.7);
  this.shape_174 = new cjs.Shape();
  this.shape_174.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFACIAAAAQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgGQAAgFgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_174.setTransform(271.225, 70.7);
  this.shape_175 = new cjs.Shape();
  this.shape_175.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAlAAIAAAHIgPAAIAAAyg");
  this.shape_175.setTransform(266.8, 70.7);
  this.shape_176 = new cjs.Shape();
  this.shape_176.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_176.setTransform(262.675, 70.7);
  this.shape_177 = new cjs.Shape();
  this.shape_177.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAlAAIAAAHIgOAAIAAAyg");
  this.shape_177.setTransform(258.45, 70.7);
  this.shape_178 = new cjs.Shape();
  this.shape_178.graphics.f("#0C593C").s().p("AgJAcQgEgDgCgHQgCgHgBgLQAAgeATAAQAIAAAEAEQADAFABAGIACAQIgcAAIABANQAAAEADADQACADAEAAQAKAAAAgOIAIAAQAAAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgIgCgFQgBgFgGAAQgGAAgBAFg");
  this.shape_178.setTransform(254.25, 70.7);
  this.shape_179 = new cjs.Shape();
  this.shape_179.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFACIAAAAQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgGQAAgFgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_179.setTransform(249.925, 70.7);
  this.shape_180 = new cjs.Shape();
  this.shape_180.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_180.setTransform(245.5, 70.7);
  this.shape_181 = new cjs.Shape();
  this.shape_181.graphics.f("#0C593C").s().p("AgKAcQgFgDgCgHQgDgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgCAHQgDAHgFADQgEADgHAAQgGAAgEgDgAgGgUQgDACgBAGQgCAFAAAIIACANQABAFADACQACADAEAAQAEAAAEgDQACgCABgFIABgNIgBgNQgBgGgDgCQgCgDgFAAQgEAAgCADg");
  this.shape_181.setTransform(241.05, 70.7);
  this.shape_182 = new cjs.Shape();
  this.shape_182.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgCAFABAIIABANQABAFACACQAEADADAAQAFAAACgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgEADg");
  this.shape_182.setTransform(235.95, 70.7);
  this.shape_183 = new cjs.Shape();
  this.shape_183.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_183.setTransform(231.175, 70.7);
  this.shape_184 = new cjs.Shape();
  this.shape_184.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFACIAAAAQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgGQAAgFgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_184.setTransform(224.325, 70.7);
  this.shape_185 = new cjs.Shape();
  this.shape_185.graphics.f("#0C593C").s().p("AgEAdIAAgLIAJAAIAAALgAgEgRIAAgLIAJAAIAAALg");
  this.shape_185.setTransform(218.175, 70.775);
  this.shape_186 = new cjs.Shape();
  this.shape_186.graphics.f("#0C593C").s().p("AgTAPQgBgFACgDQACgEADgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgFAAgCADQgBACAAAGIgIAAQAAgSARAAQAFAAAEACQADACACADQACAEAAAEIAAAiQAAAFACAAIACAAIAAAFIgDABQgEAAgCgCQgCgBgBgGQgBAFgFACQgCADgEAAQgPAAAAgQgAAAAAIgFAEIgEAEQgCADABAEQgBAIAJABQADAAAEgEIABgCIABgDIAAgGIAAgKIgHABg");
  this.shape_186.setTransform(214.7, 70.7);
  this.shape_187 = new cjs.Shape();
  this.shape_187.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFACIAAAAQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgGQAAgFgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_187.setTransform(210.325, 70.7);
  this.shape_188 = new cjs.Shape();
  this.shape_188.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAmAAIAAAHIgOAAIAAAyg");
  this.shape_188.setTransform(205.9, 70.7);
  this.shape_189 = new cjs.Shape();
  this.shape_189.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_189.setTransform(201.775, 70.7);
  this.shape_190 = new cjs.Shape();
  this.shape_190.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgWIAFAAIAFgLIACgJIAAgMIAAgTIAfAAIAAAzIAGAAIAAAWgAgEgNQAAAJgBAFIgFAOIAVAAIAAgsIgPAAg");
  this.shape_190.setTransform(196.875, 71.5);
  this.shape_191 = new cjs.Shape();
  this.shape_191.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgBgHAAgLQgBgeATAAQAHAAAEAEQAFAFABAGIABAQIgcAAIABANQAAAEADADQACADAEAAQAKAAAAgOIAIAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgCgFgFAAQgGAAgCAFg");
  this.shape_191.setTransform(192, 70.7);
  this.shape_192 = new cjs.Shape();
  this.shape_192.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAFgCABAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgCgEIAAAagAgJgZQgBAGAAALIAAALQABAFACADQACAEAFAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_192.setTransform(187.35, 71.625);
  this.shape_193 = new cjs.Shape();
  this.shape_193.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_193.setTransform(182.475, 70.7);
  this.shape_194 = new cjs.Shape();
  this.shape_194.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAGQgCAFABAIIABANQABAFACACQAEADADAAQAFAAACgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgEADg");
  this.shape_194.setTransform(175.2, 70.7);
  this.shape_195 = new cjs.Shape();
  this.shape_195.graphics.f("#0C593C").s().p("AgPAdIAAg5IAfAAIAAAHIgWAAIAAAyg");
  this.shape_195.setTransform(171.15, 70.7);
  this.shape_196 = new cjs.Shape();
  this.shape_196.graphics.f("#0C593C").s().p("AgLAcQgEgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgEADQgGADgGAAQgGAAgFgDgAgGgUQgDACgBAGQgBAFgBAIIABANQACAFADACQADADADAAQAEAAADgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgDADg");
  this.shape_196.setTransform(166.4, 70.7);
  this.shape_197 = new cjs.Shape();
  this.shape_197.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_197.setTransform(161.325, 70.7);
  this.shape_198 = new cjs.Shape();
  this.shape_198.graphics.f("#0C593C").s().p("AAKAdIAAgbIgMABQgIAAgDgDQgEgEAAgHIAAgRIAJAAIAAARQAAAEACACQABACAFAAIAKAAIAAgZIAIAAIAAA5g");
  this.shape_198.setTransform(156.35, 70.7);
  this.shape_199 = new cjs.Shape();
  this.shape_199.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAZIAMAAQAFAAACACQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEABQgCACgFAAgAgSAXIAJAAQAGAAACgDQACgCAAgGQAAgJgJgBIgKAAg");
  this.shape_199.setTransform(150.575, 70.7);
  this.shape_200 = new cjs.Shape();
  this.shape_200.graphics.f("#0C593C").s().p("AgLAkQgFgDgCgIQgCgIAAgMQAAgIABgHQABgHADgFQADgEADgDQADgDAFgBIAIgDQAEgBABgCIAGAAQgBAFgEADQgEADgHABQgGACgEAEQgDAFgBAIQAGgKAIAAQAGAAAEAEQAFADACAGQACAGAAAIQAAALgCAHQgCAGgFAEQgFADgHAAQgHAAgEgEgAgIgFQgDAFAAAJIABAOQACAFACADQADACADAAQAGAAADgGQAEgGAAgMQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
  this.shape_200.setTransform(144.8, 69.775);
  this.shape_201 = new cjs.Shape();
  this.shape_201.graphics.f("#0C593C").s().p("AgLAcQgEgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgCAHQgDAHgEADQgGADgGAAQgGAAgFgDgAgGgUQgDACgBAGQgBAFgBAIIABANQACAFADACQADADADAAQAEAAADgDQADgCABgFIABgNIgBgNQgBgGgDgCQgDgDgEAAQgDAAgDADg");
  this.shape_201.setTransform(139.95, 70.7);
  this.shape_202 = new cjs.Shape();
  this.shape_202.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_202.setTransform(132.075, 70.725);
  this.shape_203 = new cjs.Shape();
  this.shape_203.graphics.f("#0C593C").s().p("AgTAmIAAgHQADABADABQAEAAACgEQADgCABgHIgSg6IAIAAIANAtIABAAIANgtIAIAAIgSA6IgEALQgBAEgDACQgEADgFAAIgGgCg");
  this.shape_203.setTransform(127.525, 71.7);
  this.shape_204 = new cjs.Shape();
  this.shape_204.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_204.setTransform(123.125, 70.7);
  this.shape_205 = new cjs.Shape();
  this.shape_205.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_205.setTransform(118.325, 70.7);
  this.shape_206 = new cjs.Shape();
  this.shape_206.graphics.f("#0C593C").s().p("AgTAPQgBgFACgDQACgEADgCIAJgDIAJgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgFAAgCADQgCACABAGIgIAAQAAgSARAAQAFAAADACQAEACACADQACAEAAAEIAAAiQAAAFACAAIACAAIAAAFIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAAAAAIgFAEIgEAEQgCADABAEQgBAIAJABQADAAAEgEIABgCIABgDIAAgGIAAgKIgHABg");
  this.shape_206.setTransform(113.55, 70.7);
  this.shape_207 = new cjs.Shape();
  this.shape_207.graphics.f("#0C593C").s().p("AAJAdIgNgdIgGAIIAAAVIgIAAIAAg5IAIAAIAAAbIATgbIAKAAIgTAWIATAjg");
  this.shape_207.setTransform(109.4, 70.7);
  this.shape_208 = new cjs.Shape();
  this.shape_208.graphics.f("#0C593C").s().p("AgUAnQAAgHABgFQACgFAEgFIANgNQAFgEADgFQAEgFAAgHQAAgOgMAAQgGAAgDAFQgCAFAAAJIgIAAIAAgEQAAgGACgFQACgGAFgCQAEgDAGAAQAHAAAFACQAEADADAFQACAEAAAHQAAAGgCAEQgCAFgDACIgIAJIgKAKQgEADgBADIgCAGIAgAAIAAAIg");
  this.shape_208.setTransform(101.725, 69.7);
  this.shape_209 = new cjs.Shape();
  this.shape_209.graphics.f("#0C593C").s().p("AgLAcQgEgDgCgHQgDgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgCAHQgDAHgEADQgFADgHAAQgGAAgFgDgAgGgUQgDACgBAGQgCAFAAAIIABANQACAFADACQADADADAAQAFAAADgDQACgCABgFIABgNIgBgNQgBgGgDgCQgCgDgFAAQgDAAgDADg");
  this.shape_209.setTransform(94.25, 70.7);
  this.shape_210 = new cjs.Shape();
  this.shape_210.graphics.f("#0C593C").s().p("AgDAdIAAgyIgPAAIAAgHIAmAAIAAAHIgQAAIAAAyg");
  this.shape_210.setTransform(89.75, 70.7);
  this.shape_211 = new cjs.Shape();
  this.shape_211.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_211.setTransform(85.625, 70.7);
  this.shape_212 = new cjs.Shape();
  this.shape_212.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgBgHgBgLQABgeARAAQAJAAADAEQAFAFAAAGIABAQIgbAAIABANQABAEACADQACADAEAAQAJAAAAgOIAIAAQABAGgCAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_212.setTransform(81.05, 70.7);
  this.shape_213 = new cjs.Shape();
  this.shape_213.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAlIABAMIACgMIALglIANAAIAAA5g");
  this.shape_213.setTransform(75.625, 70.7);
  this.shape_214 = new cjs.Shape();
  this.shape_214.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAFAAAFQAAAGgDAEQgCADgFACIAAAAQAFAAADAEQADADAAAHQAAAFgCADQgCADgDACQgEACgDAAgAgJAXIAJAAQAFAAACgDQADgCAAgGQAAgFgDgCQgCgDgFAAIgJAAgAgJgDIAJAAQAEAAACgDQACgCAAgFQAAgJgIABIgJAAg");
  this.shape_214.setTransform(70.275, 70.7);
  this.shape_215 = new cjs.Shape();
  this.shape_215.graphics.f("#0C593C").s().p("AgUAPQAAgFACgDQABgEAEgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgCADQgCACgBAGIgHAAQAAgSARAAQAEAAAFACQADACABADQACAEAAAEIAAAiQAAAFAEAAIACAAIAAAFIgEABQgEAAgCgCQgCgBgBgGQgCAFgDACQgDADgEAAQgQAAAAgQgAABAAIgGAEIgEAEQgCADAAAEQABAIAHABQAFAAACgEIACgCIABgDIAAgGIAAgKIgGABg");
  this.shape_215.setTransform(63.1, 70.7);
  this.shape_216 = new cjs.Shape();
  this.shape_216.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_216.setTransform(57.975, 70.725);
  this.shape_217 = new cjs.Shape();
  this.shape_217.graphics.f("#0C593C").s().p("AgTAmIAAgHQADABADABQAEAAACgEQADgCABgHIgSg6IAIAAIANAtIABAAIANgtIAIAAIgSA6IgEALQgBAEgDACQgEADgFAAIgGgCg");
  this.shape_217.setTransform(53.425, 71.7);
  this.shape_218 = new cjs.Shape();
  this.shape_218.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAGQACAHAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_218.setTransform(49.025, 70.7);
  this.shape_219 = new cjs.Shape();
  this.shape_219.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_219.setTransform(44.225, 70.7);
  this.shape_220 = new cjs.Shape();
  this.shape_220.graphics.f("#0C593C").s().p("AgTAPQAAgFABgDQACgEADgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgCADQgCACAAAGIgIAAQAAgSARAAQAEAAAFACQADACABADQACAEABAEIAAAiQAAAFADAAIABAAIAAAFIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAABAAIgGAEIgEAEQgBADAAAEQAAAIAHABQAFAAACgEIACgCIABgDIAAgGIAAgKIgGABg");
  this.shape_220.setTransform(39.45, 70.7);
  this.shape_221 = new cjs.Shape();
  this.shape_221.graphics.f("#0C593C").s().p("AAKAdIgOgdIgHAIIAAAVIgHAAIAAg5IAHAAIAAAbIAUgbIAKAAIgSAWIATAjg");
  this.shape_221.setTransform(35.3, 70.7);
  this.shape_222 = new cjs.Shape();
  this.shape_222.graphics.f("#0C593C").s().p("AAEAnIAAg4IgQAAIAAgHIAKgBQADgCACgCQACgEABgFIAHAAIAABNg");
  this.shape_222.setTransform(27.125, 69.7);
  this.shape_223 = new cjs.Shape();
  this.shape_223.graphics.f("#0C593C").s().p("AAAAFIgHAKIgFgDIAIgJIgLgFIABgEIAMAEIAAgMIAFAAIAAAMIALgEIACAFIgMADIAIAKIgEADg");
  this.shape_223.setTransform(22.6, 67.3);
  this.shape_224 = new cjs.Shape();
  this.shape_224.graphics.f("#0C593C").s().p("AAAAFIgHAKIgEgDIAHgJIgMgFIACgEIANAEIAAgMIAEAAIAAAMIAMgEIACAFIgNADIAIAKIgEADg");
  this.shape_224.setTransform(17.5, 67.3);
  this.shape_225 = new cjs.Shape();
  this.shape_225.graphics.f("#0C593C").s().p("AAAAFIgHAKIgEgDIAIgJIgNgFIADgEIALAEIAAgMIAFAAIAAAMIAMgEIABAFIgMADIAIAKIgEADg");
  this.shape_225.setTransform(12.4, 67.3);
  this.shape_226 = new cjs.Shape();
  this.shape_226.graphics.f("#0C593C").s().p("AABALIALgLIgLgKIAAgJIARARIAAAFIgRARgAgQALIAKgLIgKgKIAAgJIAQARIAAAFIgQARg");
  this.shape_226.setTransform(493.5, 59.925);
  this.shape_227 = new cjs.Shape();
  this.shape_227.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_227.setTransform(488.425, 60.25);
  this.shape_228 = new cjs.Shape();
  this.shape_228.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAFQgBAGAAAIIABAMQABAGACACQADADAEAAQAFAAADgDQACgCABgGIABgMIgBgOQgBgFgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_228.setTransform(483.35, 60.25);
  this.shape_229 = new cjs.Shape();
  this.shape_229.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAHQACAGAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_229.setTransform(478.575, 60.25);
  this.shape_230 = new cjs.Shape();
  this.shape_230.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_230.setTransform(473.775, 60.25);
  this.shape_231 = new cjs.Shape();
  this.shape_231.graphics.f("#0C593C").s().p("AgLAcQgEgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgEADQgGADgGAAQgGAAgFgDgAgHgUQgCACgBAFQgCAGABAIIAAAMQACAGACACQADADAEAAQAEAAADgDQADgCABgGIABgMIgBgOQgBgFgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_231.setTransform(468.7, 60.25);
  this.shape_232 = new cjs.Shape();
  this.shape_232.graphics.f("#0C593C").s().p("AAZAdIgOgdIgHAJIAAAUIgHAAIAAgUIgHgJIgOAdIgKAAIATgjIgSgWIAKAAIAUAbIAAgbIAHAAIAAAbIAUgbIAKAAIgSAWIATAjg");
  this.shape_232.setTransform(462.7, 60.25);
  this.shape_233 = new cjs.Shape();
  this.shape_233.graphics.f("#0C593C").s().p("AAXAxIAAgTIgtAAIAAATIgIAAIAAgbIAFAAQAEgGACgHQACgHAAgIIABgWIAAgUIApAAIAABGIAGAAIAAAbgAgHgTIgBARIgDANIgEALIAfAAIAAg+IgXAAg");
  this.shape_233.setTransform(456.025, 60.175);
  this.shape_234 = new cjs.Shape();
  this.shape_234.graphics.f("#0C593C").s().p("AgRAlQgFgCgDgGQgDgFAAgGQAAgHACgDQACgFAEgDIAIgGIgFgJQgCgDAAgGQAAgDACgFQACgDADgCQAEgCAEgBQAHABAEAEQAFAEAAAHQAAAKgNAKIAOAVQADgHAAgIIAIAAQgBAOgFAIIALAOIgLAAIgFgHQgHAJgLAAQgHAAgFgDgAgQAIQgDADAAAHQAAAEACAEQACADADABQAEACAEABQAGAAAGgIIgQgZQgFADgDAFgAgJgeQgCACAAADQAAAHAGAIIAGgHQACgCAAgFQAAgEgCgCQgBgCgEgBQgDABgCACg");
  this.shape_234.setTransform(449.525, 59.35);
  this.shape_235 = new cjs.Shape();
  this.shape_235.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_235.setTransform(443.425, 60.25);
  this.shape_236 = new cjs.Shape();
  this.shape_236.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgFADQgFADgGAAQgGAAgEgDgAgHgUQgCACgBAFQgBAGAAAIIABAMQABAGACACQADADAEAAQAFAAADgDQACgCABgGIABgMIgBgOQgBgFgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_236.setTransform(438.35, 60.25);
  this.shape_237 = new cjs.Shape();
  this.shape_237.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAHQACAGAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_237.setTransform(433.575, 60.25);
  this.shape_238 = new cjs.Shape();
  this.shape_238.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_238.setTransform(428.775, 60.25);
  this.shape_239 = new cjs.Shape();
  this.shape_239.graphics.f("#0C593C").s().p("AgLAcQgEgDgDgHQgCgHAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAHQgCAHgEADQgGADgGAAQgGAAgFgDgAgHgUQgCACgBAFQgCAGABAIIAAAMQACAGACACQADADAEAAQAEAAADgDQADgCABgGIABgMIgBgOQgBgFgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_239.setTransform(423.7, 60.25);
  this.shape_240 = new cjs.Shape();
  this.shape_240.graphics.f("#0C593C").s().p("AAZAdIgOgdIgHAJIAAAUIgHAAIAAgUIgHgJIgOAdIgKAAIATgjIgSgWIAKAAIAUAbIAAgbIAHAAIAAAbIAUgbIAKAAIgSAWIATAjg");
  this.shape_240.setTransform(417.7, 60.25);
  this.shape_241 = new cjs.Shape();
  this.shape_241.graphics.f("#0C593C").s().p("AAXAxIAAgTIgtAAIAAATIgIAAIAAgbIAFAAQAEgGACgHQACgHAAgIIABgWIAAgUIApAAIAABGIAGAAIAAAbgAgHgTIgBARIgDANIgEALIAfAAIAAg+IgXAAg");
  this.shape_241.setTransform(411.025, 60.175);
  this.shape_242 = new cjs.Shape();
  this.shape_242.graphics.f("#0C593C").s().p("AABADIAAgFIAQgRIAAAJIgLAKIALALIAAAJgAgRADIAAgFIAQgRIAAAJIgKAKIAKALIAAAJg");
  this.shape_242.setTransform(405.25, 59.925);
  this.shape_243 = new cjs.Shape();
  this.shape_243.graphics.f("#0C593C").s().p("AgMAmQgGgDgCgGQgDgGgBgHIgBgQQAAgLACgIQACgJAGgGQAFgGAKAAQAQAAAFALQAFAMAAARQAAATgFALQgFALgQAAQgHAAgFgDgAgJgcQgEAEgBAHQgCAGAAAKIABAPIACAKQACAFADACQAEACAEAAQAFAAAEgCQADgCACgFQACgEAAgGIABgPIgBgNQAAgFgCgEQgCgFgEgCQgDgDgFAAQgGAAgDAFg");
  this.shape_243.setTransform(397.125, 59.275);
  this.shape_244 = new cjs.Shape();
  this.shape_244.graphics.f("#0C593C").s().p("AgMAmQgGgDgCgGQgDgGgBgHIgBgQQAAgLACgIQACgJAGgGQAFgGAKAAQAQAAAFALQAFAMAAARQAAATgFALQgFALgQAAQgHAAgFgDgAgJgcQgEAEgBAHQgCAGAAAKIABAPIACAKQACAFADACQAEACAEAAQAFAAAEgCQADgCACgFQACgEAAgGIABgPIgBgNQAAgFgCgEQgCgFgEgCQgDgDgFAAQgGAAgDAFg");
  this.shape_244.setTransform(390.875, 59.275);
  this.shape_245 = new cjs.Shape();
  this.shape_245.graphics.f("#0C593C").s().p("AgMAmQgGgDgCgGQgDgGgBgHIgBgQQAAgLACgIQACgJAGgGQAFgGAKAAQAQAAAFALQAFAMAAARQAAATgFALQgFALgQAAQgHAAgFgDgAgJgcQgEAEgBAHQgCAGAAAKIABAPIACAKQACAFADACQAEACAEAAQAFAAAEgCQADgCACgFQACgEAAgGIABgPIgBgNQAAgFgCgEQgCgFgEgCQgDgDgFAAQgGAAgDAFg");
  this.shape_245.setTransform(384.625, 59.275);
  this.shape_246 = new cjs.Shape();
  this.shape_246.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAEAAAGQAAAGgDAEQgCAEgFABIAAAAQAFAAADAEQADADAAAGQAAAGgCADQgCADgDADQgEABgDAAgAgJAWIAJAAQAFAAACgCQADgDAAgFQAAgFgDgCQgCgCgFgBIgJAAgAgJgEIAJAAQAEAAACgCQACgCAAgFQAAgJgIAAIgJAAg");
  this.shape_246.setTransform(376.925, 60.25);
  this.shape_247 = new cjs.Shape();
  this.shape_247.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAnAAIAAAHIgPAAIAAAyg");
  this.shape_247.setTransform(372.5, 60.25);
  this.shape_248 = new cjs.Shape();
  this.shape_248.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAHQACAGAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_248.setTransform(368.375, 60.25);
  this.shape_249 = new cjs.Shape();
  this.shape_249.graphics.f("#0C593C").s().p("AARAlIAAgQIghAAIAAAQIgIAAIAAgXIAFAAIAFgKIACgJIAAgMIAAgTIAfAAIAAAyIAGAAIAAAXgAgEgNQAAAKgBAEIgFANIAVAAIAAgrIgPAAg");
  this.shape_249.setTransform(363.475, 61.05);
  this.shape_250 = new cjs.Shape();
  this.shape_250.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgBgHAAgLQAAgeARAAQAJAAADAEQAFAFABAGIAAAQIgbAAIABANQAAAEADADQACADAEAAQAJAAAAgOIAIAAQAAAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgCgFgGAAQgFAAgCAFg");
  this.shape_250.setTransform(358.6, 60.25);
  this.shape_251 = new cjs.Shape();
  this.shape_251.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIAAAAQACgEAEgCQAEgCABAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgEADgFAAQgDAAgDgCQgDgCgDgEIAAAagAgJgZQgBAGgBALIABALQABAFACADQADAEAEAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_251.setTransform(353.95, 61.175);
  this.shape_252 = new cjs.Shape();
  this.shape_252.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAHQACAGAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_252.setTransform(349.075, 60.25);
  this.shape_253 = new cjs.Shape();
  this.shape_253.graphics.f("#0C593C").s().p("AAOAdIgOgXIgNAXIgJAAIASgdIgRgcIAJAAIANAWIAMgWIAJAAIgRAcIARAdg");
  this.shape_253.setTransform(342.1, 60.25);
  this.shape_254 = new cjs.Shape();
  this.shape_254.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAYIAMAAQAFABACACQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEACQgCABgFAAgAgSAWIAJAAQAGAAACgCQACgDAAgFQAAgJgJgBIgKAAg");
  this.shape_254.setTransform(336.475, 60.25);
  this.shape_255 = new cjs.Shape();
  this.shape_255.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_255.setTransform(330.575, 60.25);
  this.shape_256 = new cjs.Shape();
  this.shape_256.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_256.setTransform(325.525, 60.25);
  this.shape_257 = new cjs.Shape();
  this.shape_257.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgBgHAAgLQgBgeATAAQAHAAAEAEQAFAFABAGIABAQIgcAAIABANQAAAEADADQACADAEAAQAJAAAAgOIAJAAQgBAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgCgFgFAAQgGAAgCAFg");
  this.shape_257.setTransform(320.7, 60.25);
  this.shape_258 = new cjs.Shape();
  this.shape_258.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEADQAFAEAAAGQAAAGgDAEQgCAEgFABIAAAAQAFAAADAEQADADAAAGQAAAGgCADQgCADgDADQgEABgDAAgAgJAWIAJAAQAFAAACgCQADgDAAgFQAAgFgDgCQgCgCgFgBIgJAAgAgJgEIAJAAQAEAAACgCQACgCAAgFQAAgJgIAAIgJAAg");
  this.shape_258.setTransform(316.375, 60.25);
  this.shape_259 = new cjs.Shape();
  this.shape_259.graphics.f("#0C593C").s().p("AgDAdIAAgyIgQAAIAAgHIAnAAIAAAHIgQAAIAAAyg");
  this.shape_259.setTransform(311.95, 60.25);
  this.shape_260 = new cjs.Shape();
  this.shape_260.graphics.f("#0C593C").s().p("AgLAbQgEgEgCgGQgBgHAAgJQAAgfATAAQAJAAAEAGQAFAGAAAIIgIAAQAAgNgKAAQgGAAgCAHQgCAGAAALQAAAKACAHQACAGAGAAQAGAAACgEQACgEAAgHIAIAAQAAAJgEAHQgFAGgJAAQgHAAgFgEg");
  this.shape_260.setTransform(307.825, 60.25);
  this.shape_261 = new cjs.Shape();
  this.shape_261.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIAAAAQACgEAEgCQADgCACAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgDgEIAAAagAgJgZQgCAGAAALIABALQABAFACADQADAEAEAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_261.setTransform(303.1, 61.175);
  this.shape_262 = new cjs.Shape();
  this.shape_262.graphics.f("#0C593C").s().p("AgTAPQAAgFABgDQACgEADgCIAIgDIAKgFQACAAAAgHQAAgEgCgCQgCgDgEAAQgEAAgCADQgCACAAAFIgIAAQAAgRARAAQAEAAAFACQADACABADQACAEABAEIAAAiQAAAFADAAIABAAIAAAFIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAABAAIgGAEIgEAEQgBADAAAEQAAAIAHABQAFAAACgEIACgCIABgDIAAgFIAAgLIgGABg");
  this.shape_262.setTransform(298.2, 60.25);
  this.shape_263 = new cjs.Shape();
  this.shape_263.graphics.f("#0C593C").s().p("AAKAdIgOgdIgHAJIAAAUIgHAAIAAg5IAHAAIAAAbIAUgbIAKAAIgSAWIATAjg");
  this.shape_263.setTransform(294.05, 60.25);
  this.shape_264 = new cjs.Shape();
  this.shape_264.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgCgHAAgLQABgeARAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAgBgOIAIAAQAAAGgBAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_264.setTransform(289.15, 60.25);
  this.shape_265 = new cjs.Shape();
  this.shape_265.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_265.setTransform(284.075, 60.275);
  this.shape_266 = new cjs.Shape();
  this.shape_266.graphics.f("#0C593C").s().p("AgJAcQgEgDgCgHQgDgHAAgLQAAgeASAAQAIAAAFAEQADAFABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAAAgOIAHAAQAAAGgBAEQgCAGgEACQgEADgGAAQgFAAgFgDgAgGgSQgDAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgBAFg");
  this.shape_266.setTransform(277.1, 60.25);
  this.shape_267 = new cjs.Shape();
  this.shape_267.graphics.f("#0C593C").s().p("AAKAdIgOgdIgGAJIAAAUIgIAAIAAg5IAIAAIAAAbIATgbIAKAAIgSAWIASAjg");
  this.shape_267.setTransform(273, 60.25);
  this.shape_268 = new cjs.Shape();
  this.shape_268.graphics.f("#0C593C").s().p("AALAnIAAgsIABgHIgCAHIgSAsIgLAAIAAg6IAIAAIAAAsIAAAHIABgHIATgsIALAAIAAA6gAgIgcQgEgDAAgHIAEAAQACAHAGAAQAEAAACgBQACgCABgEIAEAAQAAAHgDADQgEADgGAAQgFAAgDgDg");
  this.shape_268.setTransform(267.85, 59.325);
  this.shape_269 = new cjs.Shape();
  this.shape_269.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgHQgCgHAAgLQABgeARAAQAIAAAFAEQAEAFAAAGIABAQIgbAAIABANQABAEACADQACADAEAAQAJAAAAgOIAIAAQABAGgCAEQgCAGgEACQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgCgFgGAAQgFAAgCAFg");
  this.shape_269.setTransform(262.95, 60.25);
  this.shape_270 = new cjs.Shape();
  this.shape_270.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_270.setTransform(258.225, 60.25);
  this.shape_271 = new cjs.Shape();
  this.shape_271.graphics.f("#0C593C").s().p("AALAdIAAgrIABgIIgCAIIgTArIgKAAIAAg5IAJAAIAAAsIgBAGIABgGIATgsIAKAAIAAA5g");
  this.shape_271.setTransform(253.15, 60.25);
  this.shape_272 = new cjs.Shape();
  this.shape_272.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_272.setTransform(247.675, 60.275);
  this.shape_273 = new cjs.Shape();
  this.shape_273.graphics.f("#0C593C").s().p("AgVAnIAAhOIAUAAQAHABAFACQAEACADAEQACAFAAAGQAAAHgDAFQgDAEgFACQADAAADACQAEACACAFQABAEAAAFQAAALgGAGQgFAFgLAAgAgNAfIANAAQAHABADgEQADgEAAgHQAAgPgNAAIgNAAgAgNgFIALAAIAHgBQADgCABgCQACgEAAgEQAAgNgMAAIgMAAg");
  this.shape_273.setTransform(240.325, 59.25);
  this.shape_274 = new cjs.Shape();
  this.shape_274.graphics.f("#0C593C").s().p("AAAAFIgHAKIgEgDIAIgKIgMgDIACgFIALAFIAAgOIAFAAIAAANIALgEIACAFIgMADIAIAKIgEAEg");
  this.shape_274.setTransform(234.8, 56.85);
  this.shape_275 = new cjs.Shape();
  this.shape_275.graphics.f("#0C593C").s().p("AAAAFIgHAKIgFgDIAIgKIgLgDIABgFIAMAFIAAgOIAFAAIAAANIALgEIADAFIgNADIAIAKIgEAEg");
  this.shape_275.setTransform(229.7, 56.85);
  this.shape_276 = new cjs.Shape();
  this.shape_276.graphics.f("#0C593C").s().p("AgEAFIAAgJIAJAAIAAAJg");
  this.shape_276.setTransform(467.775, 52.225);
  this.shape_277 = new cjs.Shape();
  this.shape_277.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAmIABALIACgLIALgmIANAAIAAA5g");
  this.shape_277.setTransform(463.375, 49.8);
  this.shape_278 = new cjs.Shape();
  this.shape_278.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgGQgCgIAAgLQABgeARAAQAIAAAFAFQADAEABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAgBgOIAIAAQAAAGgBAEQgCAFgEADQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_278.setTransform(457.9, 49.8);
  this.shape_279 = new cjs.Shape();
  this.shape_279.graphics.f("#0C593C").s().p("AALAdIAAgrIABgIIgCAIIgSArIgKAAIAAg5IAIAAIAAAsIgBAGIACgGIASgsIAKAAIAAA5g");
  this.shape_279.setTransform(453.2, 49.8);
  this.shape_280 = new cjs.Shape();
  this.shape_280.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_280.setTransform(448.125, 49.8);
  this.shape_281 = new cjs.Shape();
  this.shape_281.graphics.f("#0C593C").s().p("AgTAPQgBgFACgDQACgEADgCIAJgEIAJgEQACAAAAgHQAAgEgCgDQgCgCgEAAQgFAAgCADQgCACABAFIgIAAQAAgRARAAQAFAAADACQAEACACADQACAEAAAEIAAAiQAAAFACgBIACAAIAAAGIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAAAABIgFADIgEAEQgCACABAEQgBAJAJAAQADAAAEgDIABgCIABgDIAAgFIAAgLIgHACg");
  this.shape_281.setTransform(443.4, 49.8);
  this.shape_282 = new cjs.Shape();
  this.shape_282.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEAEQAFAEAAAFQAAAGgDAEQgCAEgFABIAAAAQAFAAADAEQADAEAAAFQAAAGgCADQgCAEgDACQgEABgDAAgAgJAWIAJAAQAFAAACgCQADgDAAgFQAAgEgDgDQgCgCgFgBIgJAAgAgJgEIAJAAQAEAAACgCQACgCAAgFQAAgJgIAAIgJAAg");
  this.shape_282.setTransform(439.075, 49.8);
  this.shape_283 = new cjs.Shape();
  this.shape_283.graphics.f("#0C593C").s().p("AgKAcQgFgDgCgGQgDgIAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgCAIQgDAGgFADQgEADgHAAQgGAAgEgDgAgGgVQgDADgBAFQgCAGAAAIIACAMQABAFADADQACADAEAAQAEAAAEgDQACgDABgFIABgMIgBgOQgBgFgDgDQgCgCgFAAQgEAAgCACg");
  this.shape_283.setTransform(434.1, 49.8);
  this.shape_284 = new cjs.Shape();
  this.shape_284.graphics.f("#0C593C").s().p("AgJAdQgEgCgCgFQgDgEAAgHIAIAAIACAIIADAEIAFABQALAAAAgLQgBgFgCgDQgCgDgFAAIgEAAIAAgGIAEAAQADAAACgDQADgCAAgFQAAgEgCgCQgDgDgEAAQgEAAgCADQgDADAAAEIgIAAQABgEACgEQACgEAEgCQAEgDAEAAQAFAAAEACQAEACACADQADAEAAAEQgBAGgDADQgDAEgEACQAEAAAEADQAEAEAAAGQAAAGgDADQgBAEgFADQgEACgFAAQgGAAgEgCg");
  this.shape_284.setTransform(429.4, 49.8);
  this.shape_285 = new cjs.Shape();
  this.shape_285.graphics.f("#0C593C").s().p("AgTAPQAAgFABgDQACgEADgCIAIgEIAKgEQACAAAAgHQAAgEgCgDQgCgCgEAAQgEAAgCADQgCACAAAFIgIAAQAAgRARAAQAEAAAFACQADACABADQACAEABAEIAAAiQAAAFADgBIABAAIAAAGIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAABABIgGADIgEAEQgBACAAAEQAAAJAHAAQAFAAACgDIACgCIABgDIAAgFIAAgLIgGACg");
  this.shape_285.setTransform(425.1, 49.8);
  this.shape_286 = new cjs.Shape();
  this.shape_286.graphics.f("#0C593C").s().p("AgTAoIAAhNIAIAAIAAAGIABAAQABgEADgCQAFgCABAAQAUAAAAAeIgBAMIgDAKQgCAEgEACQgDADgGAAQgDAAgDgCQgDgCgCgEIAAAagAgJgZQgBAGAAALIAAALQABAFACADQACAEAFAAQAGAAACgGQADgHAAgLQAAgXgLAAQgGAAgDAHg");
  this.shape_286.setTransform(420.45, 50.725);
  this.shape_287 = new cjs.Shape();
  this.shape_287.graphics.f("#0C593C").s().p("AgMAkQgEgDgCgIQgCgIAAgMQAAgIABgHQACgHACgFQADgEADgDQAEgDAEgBIAIgDQAEgBABgCIAGAAQgBAFgEADQgEADgHABQgGACgDAEQgEAFgBAIQAFgKAJAAQAFAAAFAEQAFADACAGQACAGAAAIQAAALgCAHQgCAGgFAEQgEADgIAAQgGAAgGgEgAgIgFQgDAFAAAJIABAOQABAFADADQADACADAAQAGAAAEgGQACgGAAgMQAAgJgCgFQgEgGgGAAQgFAAgDAGg");
  this.shape_287.setTransform(415.45, 48.875);
  this.shape_288 = new cjs.Shape();
  this.shape_288.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgGQgCgIAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAIQgCAGgEADQgGADgGAAQgGAAgEgDgAgHgVQgCADgBAFQgCAGABAIIABAMQABAFACADQADADAEAAQAEAAADgDQADgDABgFIABgMIgBgOQgBgFgDgDQgDgCgEAAQgEAAgDACg");
  this.shape_288.setTransform(410.65, 49.8);
  this.shape_289 = new cjs.Shape();
  this.shape_289.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgGQgCgIAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAIQgCAGgFADQgFADgGAAQgGAAgEgDgAgHgVQgCADgBAFQgCAGABAIIABAMQABAFACADQAEADADAAQAFAAADgDQACgDABgFIABgMIgBgOQgBgFgDgDQgDgCgEAAQgDAAgEACg");
  this.shape_289.setTransform(405.6, 49.8);
  this.shape_290 = new cjs.Shape();
  this.shape_290.graphics.f("#0C593C").s().p("AgJAdQgEgCgCgFQgDgEAAgHIAIAAIACAIIADAEIAFABQAKAAAAgLQABgFgDgDQgDgDgFAAIgDAAIAAgGIADAAQAEAAADgDQACgCAAgFQAAgEgCgCQgCgDgFAAQgEAAgDADQgCADAAAEIgIAAQAAgEACgEQADgEAEgCQAEgDAEAAQAFAAAEACQAEACACADQACAEABAEQAAAGgDADQgDAEgFACQAFAAAEADQADAEAAAGQAAAGgCADQgCAEgFADQgEACgGAAQgEAAgFgCg");
  this.shape_290.setTransform(400.9, 49.8);
  this.shape_291 = new cjs.Shape();
  this.shape_291.graphics.f("#0C593C").s().p("AgTAPQgBgFACgDQACgEADgCIAJgEIAJgEQACAAAAgHQAAgEgCgDQgCgCgEAAQgFAAgCADQgBACgBAFIgHAAQAAgRARAAQAFAAADACQAEACACADQACAEAAAEIAAAiQAAAFACgBIACAAIAAAGIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAAAABIgFADIgEAEQgCACABAEQgBAJAJAAQADAAAEgDIABgCIABgDIAAgFIAAgLIgHACg");
  this.shape_291.setTransform(396.6, 49.8);
  this.shape_292 = new cjs.Shape();
  this.shape_292.graphics.f("#0C593C").s().p("AgPAdIAAg5IAfAAIAAAHIgWAAIAAAyg");
  this.shape_292.setTransform(392.9, 49.8);
  this.shape_293 = new cjs.Shape();
  this.shape_293.graphics.f("#0C593C").s().p("AASAdIAAgyIgPAyIgFAAIgPgyIAAAyIgIAAIAAg5IANAAIALAmIABALIACgLIALgmIANAAIAAA5g");
  this.shape_293.setTransform(385.125, 49.8);
  this.shape_294 = new cjs.Shape();
  this.shape_294.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAYIAMAAQAFAAACADQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEACQgCABgFAAgAgSAWIAJAAQAGAAACgCQACgDAAgFQAAgKgJAAIgKAAg");
  this.shape_294.setTransform(378.575, 49.8);
  this.shape_295 = new cjs.Shape();
  this.shape_295.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_295.setTransform(372.725, 49.8);
  this.shape_296 = new cjs.Shape();
  this.shape_296.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_296.setTransform(367.725, 49.8);
  this.shape_297 = new cjs.Shape();
  this.shape_297.graphics.f("#0C593C").s().p("AgJAcQgEgDgDgGQgCgIAAgLQABgeARAAQAIAAAFAFQADAEABAGIABAQIgbAAIABANQABAEACADQACADAEAAQAKAAgBgOIAIAAQAAAGgBAEQgCAFgEADQgEADgGAAQgGAAgEgDgAgHgSQgCAFAAAIIATAAQAAgIgCgFQgBgFgHAAQgFAAgCAFg");
  this.shape_297.setTransform(362.95, 49.8);
  this.shape_298 = new cjs.Shape();
  this.shape_298.graphics.f("#0C593C").s().p("AgfAdIAAg5IAJAAIAAAyIATAAIAAgyIAHAAIAAAyIATAAIAAgyIAJAAIAAA5g");
  this.shape_298.setTransform(356.975, 49.8);
  this.shape_299 = new cjs.Shape();
  this.shape_299.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAYIAMAAQAFAAACADQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEACQgCABgFAAgAgSAWIAJAAQAGAAACgCQACgDAAgFQAAgKgJAAIgKAAg");
  this.shape_299.setTransform(349.775, 49.8);
  this.shape_300 = new cjs.Shape();
  this.shape_300.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEAEQAFAEAAAFQAAAGgDAEQgCAEgFABIAAAAQAFAAADAEQADAEAAAFQAAAGgCADQgCAEgDACQgEABgDAAgAgJAWIAJAAQAFAAACgCQADgDAAgFQAAgEgDgDQgCgCgFgBIgJAAgAgJgEIAJAAQAEAAACgCQACgCAAgFQAAgJgIAAIgJAAg");
  this.shape_300.setTransform(344.325, 49.8);
  this.shape_301 = new cjs.Shape();
  this.shape_301.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgGQgCgIAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAIQgCAGgFADQgFADgGAAQgGAAgEgDgAgHgVQgCADgBAFQgBAGAAAIIABAMQABAFACADQADADAEAAQAFAAADgDQACgDABgFIABgMIgBgOQgBgFgDgDQgDgCgEAAQgEAAgDACg");
  this.shape_301.setTransform(339.35, 49.8);
  this.shape_302 = new cjs.Shape();
  this.shape_302.graphics.f("#0C593C").s().p("AALAdIAAgyIgUAAIAAAyIgJAAIAAg5IAlAAIAAA5g");
  this.shape_302.setTransform(334.325, 49.8);
  this.shape_303 = new cjs.Shape();
  this.shape_303.graphics.f("#0C593C").s().p("AALAnIAAgsIABgHIgCAHIgSAsIgKAAIAAg6IAHAAIAAAsIAAAHIACgHIASgsIALAAIAAA6gAgIgcQgEgDAAgHIAEAAQACAHAGAAQAEAAACgBQACgCABgEIAEAAQAAAHgDADQgEADgGAAQgFAAgDgDg");
  this.shape_303.setTransform(326.9, 48.875);
  this.shape_304 = new cjs.Shape();
  this.shape_304.graphics.f("#0C593C").s().p("AgKAcQgFgDgDgGQgCgIAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgDAIQgCAGgFADQgFADgGAAQgGAAgEgDgAgHgVQgCADgBAFQgBAGAAAIIABAMQABAFACADQADADAEAAQAFAAADgDQACgDABgFIABgMIgBgOQgBgFgDgDQgDgCgEAAQgEAAgDACg");
  this.shape_304.setTransform(321.8, 49.8);
  this.shape_305 = new cjs.Shape();
  this.shape_305.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_305.setTransform(316.775, 49.8);
  this.shape_306 = new cjs.Shape();
  this.shape_306.graphics.f("#0C593C").s().p("AALAdIAAgbIgUAAIAAAbIgJAAIAAg5IAJAAIAAAYIAUAAIAAgYIAIAAIAAA5g");
  this.shape_306.setTransform(311.775, 49.8);
  this.shape_307 = new cjs.Shape();
  this.shape_307.graphics.f("#0C593C").s().p("AgTAPQgBgFACgDQACgEADgCIAJgEIAJgEQACAAAAgHQAAgEgCgDQgCgCgEAAQgFAAgCADQgCACAAAFIgHAAQAAgRARAAQAFAAADACQAEACACADQACAEAAAEIAAAiQAAAFACgBIACAAIAAAGIgDABQgEAAgCgCQgCgBgBgGQgCAFgEACQgCADgEAAQgPAAAAgQgAAAABIgFADIgEAEQgCACABAEQgBAJAJAAQADAAAEgDIABgCIABgDIAAgFIAAgLIgHACg");
  this.shape_307.setTransform(307.05, 49.8);
  this.shape_308 = new cjs.Shape();
  this.shape_308.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEAEQAFAEAAAFQAAAGgDAEQgCAEgFABIAAAAQAFAAADAEQADAEAAAFQAAAGgCADQgCAEgDACQgEABgDAAgAgJAWIAJAAQAFAAACgCQADgDAAgFQAAgEgDgDQgCgCgFgBIgJAAgAgJgEIAJAAQAEAAACgCQACgCAAgFQAAgJgIAAIgJAAg");
  this.shape_308.setTransform(302.725, 49.8);
  this.shape_309 = new cjs.Shape();
  this.shape_309.graphics.f("#0C593C").s().p("AgJAdQgEgCgCgFQgDgEAAgHIAIAAIACAIIADAEIAFABQALAAAAgLQgBgFgCgDQgDgDgEAAIgEAAIAAgGIAEAAQADAAACgDQADgCAAgFQAAgEgCgCQgCgDgFAAQgEAAgCADQgDADAAAEIgIAAQAAgEACgEQADgEAEgCQAEgDAEAAQAFAAAEACQAEACACADQADAEAAAEQAAAGgEADQgDAEgEACQAEAAAEADQAEAEAAAGQAAAGgCADQgDAEgEADQgEACgFAAQgGAAgEgCg");
  this.shape_309.setTransform(298.1, 49.8);
  this.shape_310 = new cjs.Shape();
  this.shape_310.graphics.f("#0C593C").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAYIAMAAQAFAAACADQAEABACAEQACAEAAAFQAAAEgCAEQgCAFgEACQgCABgFAAgAgSAWIAJAAQAGAAACgCQACgDAAgFQAAgKgJAAIgKAAg");
  this.shape_310.setTransform(292.675, 49.8);
  this.shape_311 = new cjs.Shape();
  this.shape_311.graphics.f("#0C593C").s().p("AgRAdIAAg5IASAAQAHAAAEAEQAFAEAAAFQAAAGgDAEQgCAEgFABIAAAAQAFAAADAEQADAEAAAFQAAAGgCADQgCAEgDACQgEABgDAAgAgJAWIAJAAQAFAAACgCQADgDAAgFQAAgEgDgDQgCgCgFgBIgJAAgAgJgEIAJAAQAEAAACgCQACgCAAgFQAAgJgIAAIgJAAg");
  this.shape_311.setTransform(287.225, 49.8);
  this.shape_312 = new cjs.Shape();
  this.shape_312.graphics.f("#0C593C").s().p("AgEAIQAEgBAAgJIgEAAIAAgKIAJAAIAAAMQAAAEgDAEQgCADgEACg");
  this.shape_312.setTransform(281.175, 53);
  this.shape_313 = new cjs.Shape();
  this.shape_313.graphics.f("#0C593C").s().p("AALAdIAAgrIABgIIgCAIIgTArIgKAAIAAg5IAIAAIAAAsIAAAGIABgGIATgsIAKAAIAAA5g");
  this.shape_313.setTransform(277.45, 49.8);
  this.shape_314 = new cjs.Shape();
  this.shape_314.graphics.f("#0C593C").s().p("AgVAdIAAgHIAEABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQACgCAAgFIABgOIAAgdIAhAAIAAA6IgIAAIAAgyIgRAAIAAAWQAAAOgDAHQgDAIgHAAIgFgBg");
  this.shape_314.setTransform(272.025, 49.825);
  this.shape_315 = new cjs.Shape();
  this.shape_315.graphics.f("#0C593C").s().p("AgLAcQgEgDgDgGQgCgIAAgLQAAgOAFgIQAFgIAKAAQAVAAAAAeQAAALgCAIQgDAGgEADQgGADgGAAQgGAAgFgDgAgGgVQgDADgBAFQgBAGgBAIIABAMQACAFADADQADADADAAQAEAAADgDQADgDABgFIABgMIgBgOQgBgFgDgDQgDgCgEAAQgDAAgDACg");
  this.shape_315.setTransform(267.3, 49.8);
  this.shape_316 = new cjs.Shape();
  this.shape_316.graphics.f("#0C593C").s().p("AgVAnIAAhOIAmAAIAAAIIgeAAIAAAaIALAAIAJABQAFABADADQAEACACAEQABAFAAAGQAAAMgGAFQgGAFgKAAgAgNAfIAKAAQAIAAAEgCQAEgEAAgIQAAgGgCgDQgCgEgEgBIgKgBIgIAAg");
  this.shape_316.setTransform(262.275, 48.8);
  this.shape_317 = new cjs.Shape();
  this.shape_317.graphics.f("#0C593C").s().p("AAAAFIgHAKIgFgDIAIgKIgMgDIACgFIANAFIAAgOIAEAAIAAANIALgEIADAFIgNADIAIAKIgEAEg");
  this.shape_317.setTransform(256.8, 46.4);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_317
   }, {
    t: this.shape_316
   }, {
    t: this.shape_315
   }, {
    t: this.shape_314
   }, {
    t: this.shape_313
   }, {
    t: this.shape_312
   }, {
    t: this.shape_311
   }, {
    t: this.shape_310
   }, {
    t: this.shape_309
   }, {
    t: this.shape_308
   }, {
    t: this.shape_307
   }, {
    t: this.shape_306
   }, {
    t: this.shape_305
   }, {
    t: this.shape_304
   }, {
    t: this.shape_303
   }, {
    t: this.shape_302
   }, {
    t: this.shape_301
   }, {
    t: this.shape_300
   }, {
    t: this.shape_299
   }, {
    t: this.shape_298
   }, {
    t: this.shape_297
   }, {
    t: this.shape_296
   }, {
    t: this.shape_295
   }, {
    t: this.shape_294
   }, {
    t: this.shape_293
   }, {
    t: this.shape_292
   }, {
    t: this.shape_291
   }, {
    t: this.shape_290
   }, {
    t: this.shape_289
   }, {
    t: this.shape_288
   }, {
    t: this.shape_287
   }, {
    t: this.shape_286
   }, {
    t: this.shape_285
   }, {
    t: this.shape_284
   }, {
    t: this.shape_283
   }, {
    t: this.shape_282
   }, {
    t: this.shape_281
   }, {
    t: this.shape_280
   }, {
    t: this.shape_279
   }, {
    t: this.shape_278
   }, {
    t: this.shape_277
   }, {
    t: this.shape_276
   }, {
    t: this.shape_275
   }, {
    t: this.shape_274
   }, {
    t: this.shape_273
   }, {
    t: this.shape_272
   }, {
    t: this.shape_271
   }, {
    t: this.shape_270
   }, {
    t: this.shape_269
   }, {
    t: this.shape_268
   }, {
    t: this.shape_267
   }, {
    t: this.shape_266
   }, {
    t: this.shape_265
   }, {
    t: this.shape_264
   }, {
    t: this.shape_263
   }, {
    t: this.shape_262
   }, {
    t: this.shape_261
   }, {
    t: this.shape_260
   }, {
    t: this.shape_259
   }, {
    t: this.shape_258
   }, {
    t: this.shape_257
   }, {
    t: this.shape_256
   }, {
    t: this.shape_255
   }, {
    t: this.shape_254
   }, {
    t: this.shape_253
   }, {
    t: this.shape_252
   }, {
    t: this.shape_251
   }, {
    t: this.shape_250
   }, {
    t: this.shape_249
   }, {
    t: this.shape_248
   }, {
    t: this.shape_247
   }, {
    t: this.shape_246
   }, {
    t: this.shape_245
   }, {
    t: this.shape_244
   }, {
    t: this.shape_243
   }, {
    t: this.shape_242
   }, {
    t: this.shape_241
   }, {
    t: this.shape_240
   }, {
    t: this.shape_239
   }, {
    t: this.shape_238
   }, {
    t: this.shape_237
   }, {
    t: this.shape_236
   }, {
    t: this.shape_235
   }, {
    t: this.shape_234
   }, {
    t: this.shape_233
   }, {
    t: this.shape_232
   }, {
    t: this.shape_231
   }, {
    t: this.shape_230
   }, {
    t: this.shape_229
   }, {
    t: this.shape_228
   }, {
    t: this.shape_227
   }, {
    t: this.shape_226
   }, {
    t: this.shape_225
   }, {
    t: this.shape_224
   }, {
    t: this.shape_223
   }, {
    t: this.shape_222
   }, {
    t: this.shape_221
   }, {
    t: this.shape_220
   }, {
    t: this.shape_219
   }, {
    t: this.shape_218
   }, {
    t: this.shape_217
   }, {
    t: this.shape_216
   }, {
    t: this.shape_215
   }, {
    t: this.shape_214
   }, {
    t: this.shape_213
   }, {
    t: this.shape_212
   }, {
    t: this.shape_211
   }, {
    t: this.shape_210
   }, {
    t: this.shape_209
   }, {
    t: this.shape_208
   }, {
    t: this.shape_207
   }, {
    t: this.shape_206
   }, {
    t: this.shape_205
   }, {
    t: this.shape_204
   }, {
    t: this.shape_203
   }, {
    t: this.shape_202
   }, {
    t: this.shape_201
   }, {
    t: this.shape_200
   }, {
    t: this.shape_199
   }, {
    t: this.shape_198
   }, {
    t: this.shape_197
   }, {
    t: this.shape_196
   }, {
    t: this.shape_195
   }, {
    t: this.shape_194
   }, {
    t: this.shape_193
   }, {
    t: this.shape_192
   }, {
    t: this.shape_191
   }, {
    t: this.shape_190
   }, {
    t: this.shape_189
   }, {
    t: this.shape_188
   }, {
    t: this.shape_187
   }, {
    t: this.shape_186
   }, {
    t: this.shape_185
   }, {
    t: this.shape_184
   }, {
    t: this.shape_183
   }, {
    t: this.shape_182
   }, {
    t: this.shape_181
   }, {
    t: this.shape_180
   }, {
    t: this.shape_179
   }, {
    t: this.shape_178
   }, {
    t: this.shape_177
   }, {
    t: this.shape_176
   }, {
    t: this.shape_175
   }, {
    t: this.shape_174
   }, {
    t: this.shape_173
   }, {
    t: this.shape_172
   }, {
    t: this.shape_171
   }, {
    t: this.shape_170
   }, {
    t: this.shape_169
   }, {
    t: this.shape_168
   }, {
    t: this.shape_167
   }, {
    t: this.shape_166
   }, {
    t: this.shape_165
   }, {
    t: this.shape_164
   }, {
    t: this.shape_163
   }, {
    t: this.shape_162
   }, {
    t: this.shape_161
   }, {
    t: this.shape_160
   }, {
    t: this.shape_159
   }, {
    t: this.shape_158
   }, {
    t: this.shape_157
   }, {
    t: this.shape_156
   }, {
    t: this.shape_155
   }, {
    t: this.shape_154
   }, {
    t: this.shape_153
   }, {
    t: this.shape_152
   }, {
    t: this.shape_151
   }, {
    t: this.shape_150
   }, {
    t: this.shape_149
   }, {
    t: this.shape_148
   }, {
    t: this.shape_147
   }, {
    t: this.shape_146
   }, {
    t: this.shape_145
   }, {
    t: this.shape_144
   }, {
    t: this.shape_143
   }, {
    t: this.shape_142
   }, {
    t: this.shape_141
   }, {
    t: this.shape_140
   }, {
    t: this.shape_139
   }, {
    t: this.shape_138
   }, {
    t: this.shape_137
   }, {
    t: this.shape_136
   }, {
    t: this.shape_135
   }, {
    t: this.shape_134
   }, {
    t: this.shape_133
   }, {
    t: this.shape_132
   }, {
    t: this.shape_131
   }, {
    t: this.shape_130
   }, {
    t: this.shape_129
   }, {
    t: this.shape_128
   }, {
    t: this.shape_127
   }, {
    t: this.shape_126
   }, {
    t: this.shape_125
   }, {
    t: this.shape_124
   }, {
    t: this.shape_123
   }, {
    t: this.shape_122
   }, {
    t: this.shape_121
   }, {
    t: this.shape_120
   }, {
    t: this.shape_119
   }, {
    t: this.shape_118
   }, {
    t: this.shape_117
   }, {
    t: this.shape_116
   }, {
    t: this.shape_115
   }, {
    t: this.shape_114
   }, {
    t: this.shape_113
   }, {
    t: this.shape_112
   }, {
    t: this.shape_111
   }, {
    t: this.shape_110
   }, {
    t: this.shape_109
   }, {
    t: this.shape_108
   }, {
    t: this.shape_107
   }, {
    t: this.shape_106
   }, {
    t: this.shape_105
   }, {
    t: this.shape_104
   }, {
    t: this.shape_103
   }, {
    t: this.shape_102
   }, {
    t: this.shape_101
   }, {
    t: this.shape_100
   }, {
    t: this.shape_99
   }, {
    t: this.shape_98
   }, {
    t: this.shape_97
   }, {
    t: this.shape_96
   }, {
    t: this.shape_95
   }, {
    t: this.shape_94
   }, {
    t: this.shape_93
   }, {
    t: this.shape_92
   }, {
    t: this.shape_91
   }, {
    t: this.shape_90
   }, {
    t: this.shape_89
   }, {
    t: this.shape_88
   }, {
    t: this.shape_87
   }, {
    t: this.shape_86
   }, {
    t: this.shape_85
   }, {
    t: this.shape_84
   }, {
    t: this.shape_83
   }, {
    t: this.shape_82
   }, {
    t: this.shape_81
   }, {
    t: this.shape_80
   }, {
    t: this.shape_79
   }, {
    t: this.shape_78
   }, {
    t: this.shape_77
   }, {
    t: this.shape_76
   }, {
    t: this.shape_75
   }, {
    t: this.shape_74
   }, {
    t: this.shape_73
   }, {
    t: this.shape_72
   }, {
    t: this.shape_71
   }, {
    t: this.shape_70
   }, {
    t: this.shape_69
   }, {
    t: this.shape_68
   }, {
    t: this.shape_67
   }, {
    t: this.shape_66
   }, {
    t: this.shape_65
   }, {
    t: this.shape_64
   }, {
    t: this.shape_63
   }, {
    t: this.shape_62
   }, {
    t: this.shape_61
   }, {
    t: this.shape_60
   }, {
    t: this.shape_59
   }, {
    t: this.shape_58
   }, {
    t: this.shape_57
   }, {
    t: this.shape_56
   }, {
    t: this.shape_55
   }, {
    t: this.shape_54
   }, {
    t: this.shape_53
   }, {
    t: this.shape_52
   }, {
    t: this.shape_51
   }, {
    t: this.shape_50
   }, {
    t: this.shape_49
   }, {
    t: this.shape_48
   }, {
    t: this.shape_47
   }, {
    t: this.shape_46
   }, {
    t: this.shape_45
   }, {
    t: this.shape_44
   }, {
    t: this.shape_43
   }, {
    t: this.shape_42
   }, {
    t: this.shape_41
   }, {
    t: this.shape_40
   }, {
    t: this.shape_39
   }, {
    t: this.shape_38
   }, {
    t: this.shape_37
   }, {
    t: this.shape_36
   }, {
    t: this.shape_35
   }, {
    t: this.shape_34
   }, {
    t: this.shape_33
   }, {
    t: this.shape_32
   }, {
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.l4, new cjs.Rectangle(-3, 40.8, 729, 47.7), null);
 (lib.l3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AgSAkQgBgHACgFQACgEADgFIAMgLIAIgIQACgFAAgGQAAgNgKAAQgFAAgDAEQgCAFAAAIIgHAAIAAgDQAAgGABgEQACgFAFgDQAEgDAFAAQAGAAAEACQAEADADAFQACAEAAAGQAAAFgCAEQgBAFgEACIgGAHIgKAKIgEAFQgCACAAAEIAdAAIAAAHg");
  this.shape.setTransform(522.4, -17.8);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AgDAFIAAgJIAIAAIAAAJg");
  this.shape_1.setTransform(516.85, -14.675);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AAKAbIAAguIgTAAIAAAuIgHAAIAAg1IAhAAIAAA1g");
  this.shape_2.setTransform(513.45, -16.875);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgRAkIAAhGIAHAAIAAAGIAAAAQACgEAEgCQACgCADAAQARABAAAbIgBAKQgBAGgCADQgBAFgDABQgEADgFAAQgDAAgCgCIgGgFIAAAXgAgHgXQgDAGAAAJIABAKQABAGACACQACAEAEAAQAGAAACgGQACgGAAgKQAAgVgKAAQgFAAgCAGg");
  this.shape_3.setTransform(508.95, -16.05);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AgKAaQgDgDgDgGQgCgHAAgKQAAgNAFgHQAEgHAJAAQATAAAAAbQAAALgCAGQgDAGgEADQgEACgGAAQgFAAgFgCgAgFgSQgDACgBAFIgBAMIABALQABAFADACQACADADAAQAEAAADgDQADgCAAgFIABgLIgBgMQgBgFgDgCQgCgDgEAAQgDAAgCADg");
  this.shape_4.setTransform(504.25, -16.875);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AAJAbIgMgbIgGAIIAAATIgIAAIAAg1IAIAAIAAAZIARgZIAJAAIgQAVIARAgg");
  this.shape_5.setTransform(500.225, -16.875);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AgDAHQADgBAAgHIgDAAIAAgKIAIAAIAAALQAAAEgDADQgCAEgDABg");
  this.shape_6.setTransform(494.6, -13.975);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AgMAjQACgLADgLQADgLAFgKQAFgKAHgJIggAAIAAgHIAnAAIAAAGIgKAPIgGAPIgFAQIgCARg");
  this.shape_7.setTransform(491.2, -17.725);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AAEAkIAAgzIgPAAIAAgHIAJgBQADgBACgCQACgEAAgFIAHAAIAABHg");
  this.shape_8.setTransform(486.075, -17.8);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgDAFIAAgJIAIAAIAAAJg");
  this.shape_9.setTransform(483.2, -14.675);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AAPAiIAAgPIgdAAIAAAPIgIAAIAAgVIAFAAIAEgJIABgIIABgMIAAgRIAcAAIAAAuIAFAAIAAAVgAgDgLIgBAMIgGAMIAUAAIAAgoIgNAAg");
  this.shape_10.setTransform(479.7, -16.15);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgEAHQAFgBAAgHIgFAAIAAgKIAIAAIAAALQABAEgDADQgCAEgEABg");
  this.shape_11.setTransform(474.05, -13.975);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AAKAbIAAgXIgIAAIgKAXIgJAAIAMgYQgEgBgDgDQgCgEAAgFQAAgFACgDQABgEADgCQAEgCAEAAIARAAIAAA1gAgEgRQgDACAAAFQAAAJAJAAIAIAAIAAgSIgIAAQgFAAgBACg");
  this.shape_12.setTransform(470.6, -16.875);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgSANQABgEABgDQABgDADgCIAIgDIAJgEQACgBAAgFQAAgFgCgCQgCgCgEAAQgEAAgCADQgBACgBAFIgHAAQAAgQAQAAQAEAAADACQAEACACADQABADAAAEIAAAeQAAAEADAAIABAAIAAAGIgCAAQgEAAgCgBQgCgBgBgFQgBADgEADQgCACgEAAQgOAAAAgPgAAAAAIgEAEQgBAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBACAAAEQgBAIAIAAQADAAADgDIACgCIAAgDIABgFIAAgJIgHABg");
  this.shape_13.setTransform(466.8, -16.875);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AAJAbIgMgbIgGAIIAAATIgIAAIAAg1IAIAAIAAAZIARgZIAJAAIgQAVIARAgg");
  this.shape_14.setTransform(463.025, -16.875);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AgKAYQgDgDgCgGQgBgGgBgIQAAgcASAAQAIAAAEAFQAEAFAAAIIgHAAQAAgMgJAAQgFAAgCAGQgCAHgBAJQAAAJACAGQACAGAGAAQAFAAACgEQACgDAAgHIAHAAQAAAJgDAFQgFAGgIAAQgGAAgFgEg");
  this.shape_15.setTransform(458.7, -16.875);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AgDAbIAAguIgOAAIAAgHIAjAAIAAAHIgOAAIAAAug");
  this.shape_16.setTransform(454.925, -16.875);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgRANQgBgEACgDQABgDADgCIAIgDIAIgEQACgBABgFQgBgFgCgCQgBgCgEAAQgEAAgCADQgCACABAFIgIAAQAAgQAQAAQAEAAAEACQADACABADQACADAAAEIAAAeQAAABAAABQAAABABAAQAAABABAAQAAAAABAAIACAAIAAAGIgDAAQgEAAgCgBQgCgBgBgFQgCADgDADQgCACgEAAQgNAAAAgPgAABAAIgGAEQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBACAAAEQAAAIAGAAQAFAAACgDIABgCIABgDIABgFIAAgJIgGABg");
  this.shape_17.setTransform(451.2, -16.875);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgTAaIAAgFIADAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAIABgGIABgNIAAgaIAeAAIAAA0IgHAAIAAguIgQAAIAAAUQAAAOgCAGQgDAHgHAAIgEgBg");
  this.shape_18.setTransform(446.575, -16.85);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AARAbIAAg1IAIAAIAAA1gAgYAbIAAg1IAIAAIAAAXIAKAAQAFAAACACQADABADADQABAEABAFQgBAEgBADQgDAEgDACQgCACgFAAgAgQAVIAIAAQAFAAADgDQAAgCAAgFQABgJgJAAIgIAAg");
  this.shape_19.setTransform(441.5, -16.875);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AgRAkIAAhGIAHAAIAAAGIABAAQABgEADgCQAEgCACAAQARABAAAbIgBAKQgBAGgCADQgCAFgCABQgEADgFAAQgDAAgDgCIgEgFIAAAXgAgHgXQgCAGAAAJIAAAKQABAGACACQACAEAEAAQAFAAADgGQACgGAAgKQAAgVgKAAQgGAAgBAGg");
  this.shape_20.setTransform(436.25, -16.05);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AANAkIgSgjIgJAKIAAAZIgHAAIAAhHIAHAAIAAAkIAagkIAKAAIgWAeIAXApg");
  this.shape_21.setTransform(431.6, -17.8);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AgDAFIAAgJIAIAAIAAAJg");
  this.shape_22.setTransform(425.4, -14.675);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AgTAaIAAgFIADAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAIABgGIABgNIAAgaIAeAAIAAA0IgHAAIAAguIgQAAIAAAUQAAAOgCAGQgDAHgHAAIgEgBg");
  this.shape_23.setTransform(421.725, -16.85);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgRAjIAAgHQACACADAAQAEAAACgDIAEgIIgRg2IAIAAIALAqIAMgqIAIAAIgRA1IgDAKQgBADgDADQgDACgFAAIgFgBg");
  this.shape_24.setTransform(417.625, -15.975);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AgDAHQADgBAAgHIgDAAIAAgKIAIAAIAAALQAAAEgDADQgCAEgDABg");
  this.shape_25.setTransform(412.35, -13.975);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AgRANQAAgEABgDQABgDADgCIAIgDIAIgEQACgBAAgFQAAgFgCgCQgBgCgEAAQgEAAgCADQgBACAAAFIgHAAQAAgQAPAAQAEAAAEACQADACABADQACADAAAEIAAAeQAAABAAABQAAABABAAQAAABABAAQAAAAABAAIACAAIAAAGIgEAAQgEAAgBgBQgCgBgBgFQgCADgCADQgDACgEAAQgNAAAAgPgAABAAIgGAEQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBACAAAEQAAAIAGAAQAEAAADgDIABgCIABgDIAAgFIAAgJIgFABg");
  this.shape_26.setTransform(409.25, -16.875);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AgQAbIAAg1IARAAQAGAAAEAEQAEADAAAGQAAAFgDADQgCAEgDABQAFAAACADQADAEAAAFQAAAFgDADIgEAFQgDACgEAAgAgIAVIAIAAQAFAAACgDQACgCAAgFQAAgEgCgDQgDgCgDAAIgJAAgAgIgDIAIAAQAEAAABgCQADgCAAgFQAAgHgIAAIgIAAg");
  this.shape_27.setTransform(405.3, -16.875);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AAJAbIgMgbIgGAIIAAATIgIAAIAAg1IAIAAIAAAZIARgZIAJAAIgQAVIARAgg");
  this.shape_28.setTransform(401.325, -16.875);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AgKAYQgEgDgBgGQgBgGAAgIQAAgcARAAQAIAAAEAFQAFAFAAAIIgIAAQAAgMgJAAQgFAAgCAGQgCAHAAAJQAAAJACAGQACAGAFAAQAGAAABgEQACgDAAgHIAIAAQgBAJgEAFQgEAGgHAAQgHAAgFgEg");
  this.shape_29.setTransform(397, -16.875);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AgKAaQgDgDgDgGQgCgHAAgKQAAgNAFgHQAEgHAJAAQATAAAAAbQAAALgCAGQgDAGgEADQgEACgGAAQgFAAgFgCgAgFgSQgDACgBAFIgBAMIABALQABAFADACQACADADAAQAEAAADgDQADgCAAgFIABgLIgBgMQgBgFgDgCQgCgDgEAAQgDAAgCADg");
  this.shape_30.setTransform(392.65, -16.875);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AAWAkIAAg7IAAgEIAAgFIgCAGIAAAEIgQA6IgIAAIgPg7IgDgJIAAAGIABAEIAAA6IgIAAIAAhHIAOAAIAOA3IABALIACgLIAOg3IAOAAIAABHg");
  this.shape_31.setTransform(386.75, -17.8);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#0C593C").s().p("AgDAFIAAgJIAHAAIAAAJg");
  this.shape_32.setTransform(379.8, -14.675);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#0C593C").s().p("AgNAbIAAg1IAbAAIAAAHIgTAAIAAAug");
  this.shape_33.setTransform(377.35, -16.875);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#0C593C").s().p("AgDAHQADgBAAgHIgDAAIAAgKIAIAAIAAALQgBAEgCADQgCAEgDABg");
  this.shape_34.setTransform(372.05, -13.975);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#0C593C").s().p("AAGAkIAAgSIgaAAIAAgHIAaguIAIAAIAAAuIAHAAIAAAHIgHAAIAAASgAgNALIATAAIAAgig");
  this.shape_35.setTransform(368.55, -17.8);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#0C593C").s().p("AAEAkIAAgzIgPAAIAAgHIAJgBQADgBACgCQACgEAAgFIAHAAIAABHg");
  this.shape_36.setTransform(363.525, -17.8);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#0C593C").s().p("AgJAiQgFgDgBgFQgDgFAAgFIgBgNQAAgJABgJQABgIAFgGQAFgHAJAAQAEAAAEACQADADADAEQACAEAAAEIgIAAQAAgFgDgCQgCgDgFAAQgDAAgCADQgDADgBAFIgCAIIAAAJQACgEAEgCQADgCAEAAQAIAAAFAGQAFAFAAAKQAAAHgDAGQgCAGgEADQgFADgFAAQgGAAgEgDgAgKALQAAAKADAEQADAFAEAAQAHAAACgGQADgFAAgHQAAgOgMAAQgKAAAAANg");
  this.shape_37.setTransform(359.45, -17.725);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#0C593C").s().p("AAEAkIAAgzIgPAAIAAgHIAJgBQADgBACgCQACgEAAgFIAHAAIAABHg");
  this.shape_38.setTransform(354.325, -17.8);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#0C593C").s().p("AgTAkQAAgHACgFQABgEAEgFIALgLIAIgIQAEgFAAgGQAAgNgLAAQgFAAgDAEQgCAFAAAIIgHAAIAAgDQAAgGACgEQABgFAEgDQAFgDAFAAQAGAAAFACQADADACAFQADAEAAAGQAAAFgCAEQgCAFgDACIgGAHIgKAKIgEAFQgBACgBAEIAeAAIAAAHg");
  this.shape_39.setTransform(350.2, -17.8);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#0C593C").s().p("AAEAkIAAgzIgPAAIAAgHIAJgBQADgBACgCQACgEAAgFIAHAAIAABHg");
  this.shape_40.setTransform(345.125, -17.8);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#0C593C").s().p("AgEAHQAFgBAAgHIgFAAIAAgKIAIAAIAAALQAAAEgCADQgCAEgEABg");
  this.shape_41.setTransform(340.05, -13.975);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#0C593C").s().p("AAKAbIAAgXIgIAAIgKAXIgIAAIALgYQgEgBgDgDQgDgEABgFQAAgFABgDQACgEAEgCQADgCAEAAIARAAIAAA1gAgEgRQgDACAAAFQAAAJAJAAIAIAAIAAgSIgIAAQgFAAgBACg");
  this.shape_42.setTransform(336.6, -16.875);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#0C593C").s().p("AAKAbIAAgoIABgGIgCAGIgQAoIgKAAIAAg1IAIAAIAAAoIgBAGIACgGIARgoIAJAAIAAA1g");
  this.shape_43.setTransform(332.475, -16.875);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#0C593C").s().p("AgKAYQgEgDgBgGQgBgGAAgIQAAgcARAAQAIAAAEAFQAFAFAAAIIgIAAQAAgMgJAAQgFAAgCAGQgCAHAAAJQAAAJACAGQACAGAFAAQAGAAABgEQACgDAAgHIAIAAQgBAJgEAFQgEAGgHAAQgHAAgFgEg");
  this.shape_44.setTransform(328.15, -16.875);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#0C593C").s().p("AgKAYQgEgDgBgGQgBgGAAgIQAAgcARAAQAIAAAEAFQAFAFAAAIIgIAAQAAgMgJAAQgFAAgCAGQgCAHAAAJQAAAJACAGQACAGAFAAQAGAAABgEQACgDAAgHIAIAAQgBAJgEAFQgEAGgHAAQgHAAgFgEg");
  this.shape_45.setTransform(324.1, -16.875);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#0C593C").s().p("AgKAaQgDgDgDgGQgCgHAAgKQAAgNAFgHQAEgHAJAAQATAAAAAbQAAALgCAGQgDAGgEADQgEACgGAAQgFAAgFgCgAgFgSQgDACgBAFIgBAMIABALQABAFADACQACADADAAQAEAAADgDQADgCAAgFIABgLIgBgMQgBgFgDgCQgCgDgEAAQgDAAgCADg");
  this.shape_46.setTransform(319.75, -16.875);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#0C593C").s().p("AgUAkIAAhHIAUAAQAJAAAGAFQAGAFAAAKQAAAGgCAEQgCAEgDACQgDADgEAAIgJABIgKAAIAAAfgAgMAAIAIAAIAJgCQAEAAACgEQABgDABgGQAAgHgEgDQgEgDgHAAIgKAAg");
  this.shape_47.setTransform(315.1, -17.8);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#0C593C").s().p("AgEAHQAFgBAAgHIgFAAIAAgKIAIAAIAAALQAAAEgCADQgCAEgEABg");
  this.shape_48.setTransform(309, -13.975);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#0C593C").s().p("AABAKIAKgKIgKgJIAAgIIAPAPIAAAFIgPAPgAgPAKIAKgKIgKgJIAAgIIAPAPIAAAFIgPAPg");
  this.shape_49.setTransform(305.6, -17.175);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#0C593C").s().p("AAJAbIAAgZIgRAAIAAAZIgIAAIAAg1IAIAAIAAAWIARAAIAAgWIAIAAIAAA1g");
  this.shape_50.setTransform(301, -16.875);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#0C593C").s().p("AgJAaQgEgDgDgGQgCgHAAgKQAAgNAEgHQAGgHAIAAQATAAAAAbQAAALgCAGQgDAGgEADQgEACgGAAQgFAAgEgCgAgGgSQgCACgBAFIgBAMIABALQABAFACACQADADADAAQAFAAACgDQACgCABgFIABgLIgBgMQgBgFgCgCQgDgDgEAAQgDAAgDADg");
  this.shape_51.setTransform(296.4, -16.875);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#0C593C").s().p("AgJAYQgEgDgCgGQgBgGgBgIQAAgcASAAQAIAAAEAFQAEAFABAIIgIAAQAAgMgJAAQgFAAgCAGQgCAHgBAJQAAAJACAGQACAGAGAAQAFAAACgEQACgDAAgHIAIAAQAAAJgEAFQgFAGgIAAQgGAAgEgEg");
  this.shape_52.setTransform(292.1, -16.875);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#0C593C").s().p("AAKAbIAAgZIgSAAIAAAZIgIAAIAAg1IAIAAIAAAWIASAAIAAgWIAHAAIAAA1g");
  this.shape_53.setTransform(287.75, -16.875);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#0C593C").s().p("AgKAaQgEgDgCgGQgCgHAAgKQAAgNAEgHQAFgHAJAAQATAAAAAbQAAALgCAGQgCAGgEADQgFACgGAAQgFAAgFgCgAgFgSQgDACgBAFIgBAMIABALQABAFADACQACADADAAQAEAAADgDQACgCABgFIABgLIgBgMQgBgFgDgCQgCgDgEAAQgDAAgCADg");
  this.shape_54.setTransform(283.15, -16.875);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#0C593C").s().p("AAXAbIgOgbIgFAIIAAATIgHAAIAAgTIgGgIIgNAbIgJAAIARggIgQgVIAJAAIASAZIAAgZIAHAAIAAAZIASgZIAJAAIgQAVIARAgg");
  this.shape_55.setTransform(277.725, -16.875);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#0C593C").s().p("AAVAsIAAgRIgpAAIAAARIgHAAIAAgYIAFAAIAFgMIACgOIAAgTIAAgTIAlAAIAABAIAGAAIAAAYgAgHgSIgBAQIgCALIgEALIAcAAIAAg5IgVAAg");
  this.shape_56.setTransform(271.675, -16.95);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#0C593C").s().p("AgPAjQgFgEgCgEQgDgFAAgGQAAgGACgDIAFgHIAIgFIgGgIIgBgIQAAgEABgDQACgEAEgCQADgCAEAAQAGAAAEAEQAEAEAAAGQAAAKgMAIIANAUIADgOIAHAAQgBAMgEAIIAJANIgKAAIgEgHQgHAJgJAAQgGAAgFgCgAgOAHQgDADAAAGQAAAEACADIAFAFQADACAEgBQAFAAAGgGIgPgXIgHAHgAgIgbQgCACAAADQAAAFAGAIIAFgGQACgDAAgEQAAgDgCgCQgBgCgDgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABg");
  this.shape_57.setTransform(265.775, -17.7);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#0C593C").s().p("AAJAbIAAgZIgSAAIAAAZIgHAAIAAg1IAHAAIAAAWIASAAIAAgWIAIAAIAAA1g");
  this.shape_58.setTransform(260.25, -16.875);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#0C593C").s().p("AgJAaQgEgDgDgGQgCgHAAgKQAAgNAEgHQAGgHAIAAQATAAAAAbQAAALgCAGQgCAGgFADQgEACgGAAQgFAAgEgCgAgGgSQgCACgBAFIgBAMIABALQABAFACACQADADADAAQAEAAADgDQADgCAAgFIABgLIgBgMQgBgFgCgCQgDgDgEAAQgDAAgDADg");
  this.shape_59.setTransform(255.65, -16.875);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#0C593C").s().p("AgKAYQgDgDgCgGQgCgGAAgIQABgcARAAQAIAAAEAFQAFAFgBAIIgHAAQAAgMgJAAQgFAAgCAGQgCAHgBAJQAAAJACAGQADAGAFAAQAFAAACgEQACgDAAgHIAHAAQAAAJgDAFQgFAGgIAAQgHAAgEgEg");
  this.shape_60.setTransform(251.35, -16.875);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#0C593C").s().p("AAJAbIAAgZIgRAAIAAAZIgIAAIAAg1IAIAAIAAAWIARAAIAAgWIAIAAIAAA1g");
  this.shape_61.setTransform(247, -16.875);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#0C593C").s().p("AgJAaQgEgDgDgGQgCgHAAgKQAAgNAEgHQAGgHAIAAQATAAAAAbQAAALgCAGQgDAGgEADQgEACgGAAQgFAAgEgCgAgGgSQgCACgBAFIgBAMIABALQABAFACACQADADADAAQAFAAACgDQACgCABgFIABgLIgBgMQgBgFgCgCQgDgDgEAAQgDAAgDADg");
  this.shape_62.setTransform(242.4, -16.875);
  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#0C593C").s().p("AAXAbIgOgbIgFAIIAAATIgHAAIAAgTIgGgIIgNAbIgJAAIARggIgQgVIAJAAIASAZIAAgZIAHAAIAAAZIASgZIAJAAIgQAVIARAgg");
  this.shape_63.setTransform(236.975, -16.875);
  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#0C593C").s().p("AAVAsIAAgRIgpAAIAAARIgHAAIAAgYIAFAAIAFgMIACgOIAAgTIAAgTIAlAAIAABAIAGAAIAAAYgAgHgSIgBAQIgCALIgEALIAcAAIAAg5IgVAAg");
  this.shape_64.setTransform(230.925, -16.95);
  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#0C593C").s().p("AABADIAAgFIAPgPIAAAIIgKAJIAKAKIAAAIgAgPADIAAgFIAOgPIAAAIIgJAJIAJAKIAAAIg");
  this.shape_65.setTransform(225.7, -17.175);
  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#0C593C").s().p("AgLAjQgFgDgCgFQgDgGgBgGIgBgPQAAgJACgIQACgIAFgGQAFgGAJABQAOgBAFALQAFALAAAPQAAASgFAKQgFAKgOAAQgGgBgFgCgAgIgZQgEADgBAHQgBAGAAAJIAAANQABAFACAEQABAFADACQADABAEAAQAFAAADgBQADgCACgFIACgJIABgNIgBgMQgBgFgCgEQgBgEgDgCQgEgCgEAAQgFAAgDAEg");
  this.shape_66.setTransform(218.425, -17.8);
  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#0C593C").s().p("AgLAjQgFgDgCgFQgDgGgBgGIgBgPQAAgJACgIQACgIAFgGQAFgGAJABQAOgBAFALQAFALAAAPQAAASgFAKQgFAKgOAAQgGgBgFgCgAgIgZQgEADgBAHQgBAGAAAJIAAANQABAFACAEQABAFADACQADABAEAAQAFAAADgBQADgCACgFIACgJIABgNIgBgMQgBgFgCgEQgBgEgDgCQgEgCgEAAQgFAAgDAEg");
  this.shape_67.setTransform(212.825, -17.8);
  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#0C593C").s().p("AgLAjQgFgDgCgFQgDgGgBgGIgBgPQAAgJACgIQACgIAFgGQAFgGAJABQAOgBAFALQAFALAAAPQAAASgFAKQgFAKgOAAQgGgBgFgCgAgIgZQgEADgBAHQgBAGAAAJIAAANQABAFACAEQABAFADACQADABAEAAQAFAAADgBQADgCACgFIACgJIABgNIgBgMQgBgFgCgEQgBgEgDgCQgEgCgEAAQgFAAgDAEg");
  this.shape_68.setTransform(207.225, -17.8);
  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#0C593C").s().p("AAYAvIAAg7IABgJIAAgLIgBAAIgUBPIgHAAIgVhPIABALIAAAJIAAA7IgKAAIAAheIAOAAIATBNIAAAAIAUhNIAOAAIAABeg");
  this.shape_69.setTransform(589.4, -6.1);
  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_70.setTransform(581.775, -6.1);
  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#0C593C").s().p("AgEAvIAAhTIgSAAIAAgLIAtAAIAAALIgSAAIAABTg");
  this.shape_71.setTransform(575.875, -6.1);
  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#0C593C").s().p("AgPAkQgHgNAAgXQAAgNADgLQADgLAHgHQAGgGAJAAQAKAAAHAFIgEAKIgGgDIgHgCQgGABgEAEQgEAFgCAKQgCAIAAAKQAAASAFALQAFAKAJgBIAHAAIAHgDIAAAKQgHAEgIAAQgNAAgIgNg");
  this.shape_72.setTransform(570.975, -6.1);
  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#0C593C").s().p("AAQAvIAAg2IABgLIAAgLIAAAAIgeBMIgMAAIAAheIAJAAIAAA3IAAAKIgBALIABAAIAfhMIALAAIAABeg");
  this.shape_73.setTransform(564.55, -6.1);
  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#0C593C").s().p("AgaAuIAAgJIAFABQADAAACgFQACgFABgKIABgRIADgVIACgbIAiAAIAABeIgKAAIAAhUIgRAAIAAARIgBAQIgCAOIgBAMQgBAJgCAGQgCAFgDADQgDADgFAAQgEAAgCgCg");
  this.shape_74.setTransform(557.475, -6.05);
  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#0C593C").s().p("AASAvIgHgdIgVAAIgGAdIgLAAIAWheIAKAAIAXBegAAAgdIgBAHIgHAeIARAAIgHgeIgBgHIgBgHIAAAHg");
  this.shape_75.setTransform(552, -6.1);
  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#0C593C").s().p("AAQAvIAAg2IABgLIAAgLIAAAAIgeBMIgMAAIAAheIAKAAIAAA3IgBAKIgBALIABAAIAfhMIALAAIAABeg");
  this.shape_76.setTransform(545.75, -6.1);
  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#0C593C").s().p("AASA8IAAgZIgtAAIAAheIAKAAIAABTIAbAAIAAhTIAKAAIAABTIAIAAIAAAkg");
  this.shape_77.setTransform(539.25, -4.825);
  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_78.setTransform(533.325, -6.1);
  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#0C593C").s().p("AAOAvIAAhTIgbAAIAABTIgKAAIAAheIAvAAIAABeg");
  this.shape_79.setTransform(527.325, -6.1);
  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#0C593C").s().p("AgPAkQgHgNAAgXQAAgNADgLQADgLAHgHQAGgGAJAAQAKAAAHAFIgEAKIgGgDIgHgCQgGABgEAEQgEAFgCAKQgCAIAAAKQAAASAFALQAFAKAJgBIAHAAIAHgDIAAAKQgHAEgIAAQgNAAgIgNg");
  this.shape_80.setTransform(521.525, -6.1);
  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_81.setTransform(512.925, -6.1);
  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#0C593C").s().p("AgPAkQgHgNAAgXQAAgNADgLQADgLAHgHQAGgGAJAAQAKAAAHAFIgEAKIgGgDIgHgCQgGABgEAEQgEAFgCAKQgCAIAAAKQAAASAFALQAFAKAJgBIAHAAIAHgDIAAAKQgHAEgIAAQgNAAgIgNg");
  this.shape_82.setTransform(506.975, -6.1);
  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f("#0C593C").s().p("AgVAvIAAheIAKAAIAAApIAJAAQALgBAGAHQAHAGAAAOQAAAMgHAIQgGAHgLAAgAgLAmIAJAAQAOgBAAgRQAAgJgEgFQgEgEgHAAIgIAAg");
  this.shape_83.setTransform(496.875, -6.1);
  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#0C593C").s().p("AgPAkQgHgNAAgXQAAgNADgLQADgLAHgHQAGgGAJAAQAKAAAHAFIgEAKIgGgDIgHgCQgGABgEAEQgEAFgCAKQgCAIAAAKQAAASAFALQAFAKAJgBIAHAAIAHgDIAAAKQgHAEgIAAQgNAAgIgNg");
  this.shape_84.setTransform(491.275, -6.1);
  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_85.setTransform(486.075, -6.1);
  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f("#0C593C").s().p("AgEAvIAAhTIgSAAIAAgLIAtAAIAAALIgSAAIAABTg");
  this.shape_86.setTransform(481.025, -6.1);
  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f("#0C593C").s().p("AARA+IAAg4IAAgKIABgKIgBAAIgfBMIgLAAIAAheIAJAAIAAA2IAAAKIAAAMIAAAAIAehMIAMAAIAABegAgLguQgFgFAAgKIAJAAQAAAHACADQACADAEAAQAEAAACgDQACgDABgHIAIAAQgBAKgEAFQgEAFgIAAQgIAAgEgFg");
  this.shape_87.setTransform(475.05, -7.55);
  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f("#0C593C").s().p("AgSAwIgEgCIAAgKQAEACADAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAgBIAFgFIACgLIgUhDIAKAAIANAsIABAEIABAGIABAAIABgFIABgEIALgtIAKAAIgTBDQgCAKgDAGQgCAGgEADQgDADgGAAIgEAAg");
  this.shape_88.setTransform(469, -6.025);
  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f("#0C593C").s().p("AgUAvIAAheIARAAQAMABAGAGQAGAIAAAOQAAANgGAHQgGAJgNAAIgGAAIAAAkgAgKABIAGAAQAHgBAEgDQAEgFAAgKQAAgKgEgEQgEgFgGABIgHAAg");
  this.shape_89.setTransform(463.875, -6.1);
  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f("#0C593C").s().p("AARAvIAAg2IAAgLIABgLIgBAAIgfBMIgLAAIAAheIAKAAIAAA3IgBAKIAAALIAAAAIAehMIAMAAIAABeg");
  this.shape_90.setTransform(457.5, -6.1);
  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f("#0C593C").s().p("AgEAvIAAhTIgSAAIAAgLIAtAAIAAALIgSAAIAABTg");
  this.shape_91.setTransform(451.575, -6.1);
  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f("#0C593C").s().p("AgVAvIAAheIAKAAIAAApIAJAAQALgBAGAHQAHAGAAAOQAAAMgHAIQgGAHgLAAgAgLAmIAJAAQAOgBAAgRQAAgJgEgFQgEgEgHAAIgIAAg");
  this.shape_92.setTransform(446.625, -6.1);
  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f("#0C593C").s().p("AgaAuIAAgJIAFABQADAAACgFQACgFABgKIABgRIADgVIACgbIAiAAIAABeIgKAAIAAhUIgRAAIAAARIgBAQIgCAOIgBAMQgBAJgCAGQgCAFgDADQgDADgFAAQgEAAgCgCg");
  this.shape_93.setTransform(440.025, -6.05);
  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f("#0C593C").s().p("AgSAwIgEgCIAAgKQAEACADAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAgBIAFgFIACgLIgUhDIAKAAIANAsIABAEIABAGIABAAIABgFIAAgEIAMgtIAKAAIgTBDQgCAKgDAGQgCAGgEADQgDADgGAAIgEAAg");
  this.shape_94.setTransform(434.8, -6.025);
  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f("#0C593C").s().p("AgPAkQgHgNAAgXQAAgNADgLQADgLAHgHQAGgGAJAAQAKAAAHAFIgEAKIgGgDIgHgCQgGABgEAEQgEAFgCAKQgCAIAAAKQAAASAFALQAFAKAJgBIAHAAIAHgDIAAAKQgHAEgIAAQgNAAgIgNg");
  this.shape_95.setTransform(429.625, -6.1);
  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f("#0C593C").s().p("AAOAvIAAgsIgbAAIAAAsIgKAAIAAheIAKAAIAAApIAbAAIAAgpIAKAAIAABeg");
  this.shape_96.setTransform(423.425, -6.1);
  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_97.setTransform(416.775, -6.1);
  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f("#0C593C").s().p("AAMAvIgYgvIAAAvIgKAAIAAheIAKAAIAAAuIAXguIALAAIgYAvIAZAvg");
  this.shape_98.setTransform(411.025, -6.1);
  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_99.setTransform(404.475, -6.1);
  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f("#0C593C").s().p("AgUAvIAAheIARAAQAMABAGAGQAGAIAAAOQAAANgGAHQgGAJgNAAIgGAAIAAAkgAgKABIAGAAQAHgBAEgDQAEgFAAgKQAAgKgEgEQgEgFgGABIgHAAg");
  this.shape_100.setTransform(398.525, -6.1);
  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f("#0C593C").s().p("AAOAvIAAhTIgbAAIAABTIgKAAIAAheIAvAAIAABeg");
  this.shape_101.setTransform(392.225, -6.1);
  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f("#0C593C").s().p("AAZAvIAAg7IAAgJIAAgLIAAAAIgVBPIgIAAIgUhPIAAALIAAAJIAAA7IgJAAIAAheIAPAAIASBNIAAAAIAUhNIAOAAIAABeg");
  this.shape_102.setTransform(382.45, -6.1);
  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_103.setTransform(375.925, -6.1);
  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f("#0C593C").s().p("AAQAvIAAg2IABgLIAAgLIAAAAIgeBMIgMAAIAAheIAKAAIAAA3IgBAKIgBALIABAAIAfhMIALAAIAABeg");
  this.shape_104.setTransform(369.8, -6.1);
  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f("#0C593C").s().p("AAOAvIAAgsIgbAAIAAAsIgKAAIAAheIAKAAIAAApIAbAAIAAgpIAKAAIAABeg");
  this.shape_105.setTransform(363.025, -6.1);
  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_106.setTransform(357.425, -6.1);
  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f("#0C593C").s().p("AAOAvIAAgsIgbAAIAAAsIgKAAIAAheIAKAAIAAApIAbAAIAAgpIAKAAIAABeg");
  this.shape_107.setTransform(351.525, -6.1);
  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_108.setTransform(345.925, -6.1);
  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#0C593C").s().p("AAYAvIAAg7IABgJIAAgLIgBAAIgUBPIgIAAIgUhPIABALIAAAJIAAA7IgKAAIAAheIAPAAIASBNIABAAIAThNIAOAAIAABeg");
  this.shape_109.setTransform(339.05, -6.1);
  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#0C593C").s().p("AAQAvIAAg2IABgLIABgLIgBAAIgeBMIgMAAIAAheIAKAAIAAA3IgBAKIAAALIAAAAIAehMIAMAAIAABeg");
  this.shape_110.setTransform(331.3, -6.1);
  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#0C593C").s().p("AgUAvIAAheIARAAQAMABAGAGQAGAIAAAOQAAANgGAHQgGAJgNAAIgGAAIAAAkgAgKABIAGAAQAHgBAEgDQAEgFAAgKQAAgKgEgEQgEgFgGABIgHAAg");
  this.shape_111.setTransform(325.325, -6.1);
  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f("#0C593C").s().p("AAOAvIAAhTIgbAAIAABTIgKAAIAAheIAvAAIAABeg");
  this.shape_112.setTransform(319.025, -6.1);
  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f("#0C593C").s().p("AAVA8IAAgZIgpAAIAAAZIgJAAIAAgkIAGAAQAFgTAFgUQADgWABgWIAgAAIAABTIAHAAIAAAkgAgCgXIgFAYIgGAXIAaAAIAAhJIgOAAIgBAag");
  this.shape_113.setTransform(310.3, -4.825);
  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_114.setTransform(304.925, -6.1);
  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f("#0C593C").s().p("AgUAvIAAheIARAAQAMABAGAGQAGAIAAAOQAAANgGAHQgGAJgNAAIgGAAIAAAkgAgKABIAGAAQAHgBAEgDQAEgFAAgKQAAgKgEgEQgEgFgGABIgHAAg");
  this.shape_115.setTransform(299.825, -6.1);
  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_116.setTransform(294.575, -6.1);
  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f("#0C593C").s().p("AAOAvIAAhTIgbAAIAABTIgKAAIAAheIAvAAIAABeg");
  this.shape_117.setTransform(288.625, -6.1);
  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f("#0C593C").s().p("AgEAGQgBgCAAgEQAAgDABgDQACgCACAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQABACAAAEQAAAEgBADQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgDg");
  this.shape_118.setTransform(281.775, -2.075);
  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f("#0C593C").s().p("AANAvIAAgnIgKAAIgOAnIgMAAIATgqQgHgCgDgGQgDgGAAgKQAAgcAXAAIARAAIAABegAgEghQgEAEABAKQAAASAMABIAIAAIAAgkIgHAAQgGAAgEADg");
  this.shape_119.setTransform(277.3, -6.1);
  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f("#0C593C").s().p("AAQAvIAAg2IABgLIAAgLIAAAAIgeBMIgMAAIAAheIAKAAIAAA3IgBAKIAAALIAAAAIAehMIAMAAIAABeg");
  this.shape_120.setTransform(271.35, -6.1);
  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f("#0C593C").s().p("AAOAvIAAgsIgbAAIAAAsIgKAAIAAheIAKAAIAAApIAbAAIAAgpIAKAAIAABeg");
  this.shape_121.setTransform(264.525, -6.1);
  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f("#0C593C").s().p("AARAvIgGgdIgVAAIgHAdIgKAAIAXheIAKAAIAWBegAAAgdIgBAHIgHAeIARAAIgHgeIgBgHIgBgHIAAAHg");
  this.shape_122.setTransform(258.45, -6.1);
  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f("#0C593C").s().p("AgMAwIgJgDIAAgMIAIAFIAJABQAPAAAAgSQAAgJgEgEQgFgFgIAAIgHAAIAAgJIAHAAQAQAAAAgRQAAgHgDgEQgDgEgFAAQgFAAgDACIgHAFIgEgIQAEgFAFgBQAFgDAGAAQAJAAAGAGQAFAHAAALQAAAJgEAGQgEAGgHACIAAABQAIAAAEAFQAFAGAAAKQAAANgHAHQgGAIgMAAIgJgBg");
  this.shape_123.setTransform(252.875, -6.1);
  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f("#0C593C").s().p("AARAvIgGgdIgVAAIgGAdIgLAAIAXheIAJAAIAXBegAAAgdIgCAHIgGAeIARAAIgHgeIgBgHIgBgHIAAAHg");
  this.shape_124.setTransform(247.5, -6.1);
  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f("#0C593C").s().p("AAMAvIgYgvIAAAvIgKAAIAAheIAKAAIAAAuIAXguIALAAIgYAvIAZAvg");
  this.shape_125.setTransform(242.425, -6.1);
  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_126.setTransform(235.875, -6.1);
  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f("#0C593C").s().p("AAOAvIAAhTIgbAAIAABTIgKAAIAAheIAvAAIAABeg");
  this.shape_127.setTransform(229.075, -6.1);
  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_128.setTransform(222.475, -6.1);
  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f("#0C593C").s().p("AgWAvIAAheIAUAAQALAAAFAGQAHAFgBAMQAAAKgCAFQgDAGgGABIAAABQAGABAEAFQAEAFgBAKQAAANgFAHQgGAHgLAAgAgMAmIAMAAQAGgBADgEQADgEAAgJQAAgJgDgEQgEgEgGAAIgLAAgAgMgGIALAAQAFAAAEgEQACgEAAgJQAAgNgMAAIgKAAg");
  this.shape_129.setTransform(216.3, -6.1);
  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f("#0C593C").s().p("AARAvIAAg2IAAgLIABgLIgBAAIgfBMIgLAAIAAheIAJAAIAAA3IAAAKIgBALIABAAIAfhMIALAAIAABeg");
  this.shape_130.setTransform(209.75, -6.1);
  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f("#0C593C").s().p("AgEAvIAAhTIgSAAIAAgLIAtAAIAAALIgSAAIAABTg");
  this.shape_131.setTransform(203.825, -6.1);
  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f("#0C593C").s().p("AgPAqQgHgGgCgMQgDgKAAgOQAAgXAHgMQAHgNANAAQAKAAAGAGQAGAHADALQADALAAANQAAAOgDALQgDALgGAGQgGAHgKAAQgJAAgGgHgAgNgbQgEAJAAASQAAATAEAKQAFAKAIgBQAJABAEgKQAFgKAAgTQAAgSgFgKQgEgKgJAAQgIAAgFALg");
  this.shape_132.setTransform(198.025, -6.1);
  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f("#0C593C").s().p("AgUAvIAAheIARAAQAMABAGAGQAGAIAAAOQAAANgGAHQgGAJgNAAIgGAAIAAAkgAgKABIAGAAQAHgBAEgDQAEgFAAgKQAAgKgEgEQgEgFgGABIgHAAg");
  this.shape_133.setTransform(192.125, -6.1);
  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f("#0C593C").s().p("AAOAvIAAhTIgbAAIAABTIgKAAIAAheIAvAAIAABeg");
  this.shape_134.setTransform(185.825, -6.1);
  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f("#0C593C").s().p("AANAvIAAgnIgKAAIgOAnIgMAAIASgqQgGgCgEgGQgCgGAAgKQgBgcAYAAIARAAIAABegAgEghQgDAEAAAKQgBASANABIAIAAIAAgkIgGAAQgIAAgDADg");
  this.shape_135.setTransform(177.15, -6.1);
  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f("#0C593C").s().p("AgPAkQgHgNAAgXQAAgNADgLQADgLAHgHQAGgGAJAAQAKAAAHAFIgEAKIgGgDIgHgCQgGABgEAEQgEAFgCAKQgCAIAAAKQAAASAFALQAFAKAJgBIAHAAIAHgDIAAAKQgHAEgIAAQgNAAgIgNg");
  this.shape_136.setTransform(172.075, -6.1);
  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f("#0C593C").s().p("AgEAvIAAhTIgSAAIAAgLIAtAAIAAALIgSAAIAABTg");
  this.shape_137.setTransform(166.725, -6.1);
  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f("#0C593C").s().p("AgHAlQgGgMgBgWIgNAAIAAAsIgKAAIAAheIAKAAIAAApIANAAQABgUAHgLQAGgLAMAAQANAAAHANQAGAMAAAXQAAAOgCALQgDALgGAGQgGAHgJAAQgMAAgHgMgAAAgbQgEAJAAASQAAATAEAKQADAKAJgBQAIABAEgKQAEgKAAgTQAAgSgEgKQgEgKgIAAQgJAAgDALg");
  this.shape_138.setTransform(159.925, -6.1);
  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f("#0C593C").s().p("AgRAvIAAheIAjAAIAAALIgZAAIAAAeIAXAAIAAAJIgXAAIAAAiIAZAAIAAAKg");
  this.shape_139.setTransform(152.975, -6.1);
  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f("#0C593C").s().p("AAZAvIAAg7IAAgJIAAgLIAAAAIgVBPIgIAAIgUhPIAAALIAAAJIAAA7IgJAAIAAheIAPAAIASBNIABAAIAThNIAOAAIAABeg");
  this.shape_140.setTransform(146.1, -6.1);
  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f("#0C593C").s().p("AARAvIAAg2IAAgLIABgLIgBAAIgfBMIgLAAIAAheIAKAAIAAA3IgBAKIAAALIAAAAIAehMIAMAAIAABeg");
  this.shape_141.setTransform(138.35, -6.1);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_141
   }, {
    t: this.shape_140
   }, {
    t: this.shape_139
   }, {
    t: this.shape_138
   }, {
    t: this.shape_137
   }, {
    t: this.shape_136
   }, {
    t: this.shape_135
   }, {
    t: this.shape_134
   }, {
    t: this.shape_133
   }, {
    t: this.shape_132
   }, {
    t: this.shape_131
   }, {
    t: this.shape_130
   }, {
    t: this.shape_129
   }, {
    t: this.shape_128
   }, {
    t: this.shape_127
   }, {
    t: this.shape_126
   }, {
    t: this.shape_125
   }, {
    t: this.shape_124
   }, {
    t: this.shape_123
   }, {
    t: this.shape_122
   }, {
    t: this.shape_121
   }, {
    t: this.shape_120
   }, {
    t: this.shape_119
   }, {
    t: this.shape_118
   }, {
    t: this.shape_117
   }, {
    t: this.shape_116
   }, {
    t: this.shape_115
   }, {
    t: this.shape_114
   }, {
    t: this.shape_113
   }, {
    t: this.shape_112
   }, {
    t: this.shape_111
   }, {
    t: this.shape_110
   }, {
    t: this.shape_109
   }, {
    t: this.shape_108
   }, {
    t: this.shape_107
   }, {
    t: this.shape_106
   }, {
    t: this.shape_105
   }, {
    t: this.shape_104
   }, {
    t: this.shape_103
   }, {
    t: this.shape_102
   }, {
    t: this.shape_101
   }, {
    t: this.shape_100
   }, {
    t: this.shape_99
   }, {
    t: this.shape_98
   }, {
    t: this.shape_97
   }, {
    t: this.shape_96
   }, {
    t: this.shape_95
   }, {
    t: this.shape_94
   }, {
    t: this.shape_93
   }, {
    t: this.shape_92
   }, {
    t: this.shape_91
   }, {
    t: this.shape_90
   }, {
    t: this.shape_89
   }, {
    t: this.shape_88
   }, {
    t: this.shape_87
   }, {
    t: this.shape_86
   }, {
    t: this.shape_85
   }, {
    t: this.shape_84
   }, {
    t: this.shape_83
   }, {
    t: this.shape_82
   }, {
    t: this.shape_81
   }, {
    t: this.shape_80
   }, {
    t: this.shape_79
   }, {
    t: this.shape_78
   }, {
    t: this.shape_77
   }, {
    t: this.shape_76
   }, {
    t: this.shape_75
   }, {
    t: this.shape_74
   }, {
    t: this.shape_73
   }, {
    t: this.shape_72
   }, {
    t: this.shape_71
   }, {
    t: this.shape_70
   }, {
    t: this.shape_69
   }, {
    t: this.shape_68
   }, {
    t: this.shape_67
   }, {
    t: this.shape_66
   }, {
    t: this.shape_65
   }, {
    t: this.shape_64
   }, {
    t: this.shape_63
   }, {
    t: this.shape_62
   }, {
    t: this.shape_61
   }, {
    t: this.shape_60
   }, {
    t: this.shape_59
   }, {
    t: this.shape_58
   }, {
    t: this.shape_57
   }, {
    t: this.shape_56
   }, {
    t: this.shape_55
   }, {
    t: this.shape_54
   }, {
    t: this.shape_53
   }, {
    t: this.shape_52
   }, {
    t: this.shape_51
   }, {
    t: this.shape_50
   }, {
    t: this.shape_49
   }, {
    t: this.shape_48
   }, {
    t: this.shape_47
   }, {
    t: this.shape_46
   }, {
    t: this.shape_45
   }, {
    t: this.shape_44
   }, {
    t: this.shape_43
   }, {
    t: this.shape_42
   }, {
    t: this.shape_41
   }, {
    t: this.shape_40
   }, {
    t: this.shape_39
   }, {
    t: this.shape_38
   }, {
    t: this.shape_37
   }, {
    t: this.shape_36
   }, {
    t: this.shape_35
   }, {
    t: this.shape_34
   }, {
    t: this.shape_33
   }, {
    t: this.shape_32
   }, {
    t: this.shape_31
   }, {
    t: this.shape_30
   }, {
    t: this.shape_29
   }, {
    t: this.shape_28
   }, {
    t: this.shape_27
   }, {
    t: this.shape_26
   }, {
    t: this.shape_25
   }, {
    t: this.shape_24
   }, {
    t: this.shape_23
   }, {
    t: this.shape_22
   }, {
    t: this.shape_21
   }, {
    t: this.shape_20
   }, {
    t: this.shape_19
   }, {
    t: this.shape_18
   }, {
    t: this.shape_17
   }, {
    t: this.shape_16
   }, {
    t: this.shape_15
   }, {
    t: this.shape_14
   }, {
    t: this.shape_13
   }, {
    t: this.shape_12
   }, {
    t: this.shape_11
   }, {
    t: this.shape_10
   }, {
    t: this.shape_9
   }, {
    t: this.shape_8
   }, {
    t: this.shape_7
   }, {
    t: this.shape_6
   }, {
    t: this.shape_5
   }, {
    t: this.shape_4
   }, {
    t: this.shape_3
   }, {
    t: this.shape_2
   }, {
    t: this.shape_1
   }, {
    t: this.shape
   }]
  }).wait(1));
  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f("rgba(216,247,139,0.698)").s().p("Eg43AB4IAAjvMBxvAAAIAADvg");
  this.shape_142.setTransform(364, -11);
  this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1));
 }).prototype = getMCSymbolPrototype(lib.l3, new cjs.Rectangle(0, -25.2, 729, 30.4), null);
 (lib.icon03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.icon3();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.icon03, new cjs.Rectangle(0, 0, 142.8, 142.8), null);
 (lib.gr = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["rgba(217,237,141,0)", "#D9ED8D"], [0, 1], -14.6, -29.9, -14.6, -43.9).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
  this.shape.setTransform(364, 45);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.gr, new cjs.Rectangle(0, 0, 728, 90), null);
 (lib.fish02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.fish2();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.fish02, new cjs.Rectangle(0, 0, 230.8, 177.4), null);
 (lib.fish01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.fish1();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.fish01, new cjs.Rectangle(0, 0, 228.1, 207.5), null);
 (lib.black_plate = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#C0DF53").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
  this.shape.setTransform(364, 45);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 728, 90), null);
 (lib.bg_g = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["#C0DF53", "#D9ED8D"], [0, 1], -14.6, -29.1, -14.6, -42.7).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
  this.shape.setTransform(364, 45);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_g, new cjs.Rectangle(0, 0, 728, 90), null);
 (lib.b1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bubble();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.b1, new cjs.Rectangle(0, 0, 298.8, 298.8), null);
 (lib.txt04 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("Ay+FoIAAjCMAsNAAAIAADCg");
  mask.setTransform(161.4902, 35.9716);
  this.instance = new lib.t4();
  this.instance.parent = this;
  this.instance.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance.alpha = 0;
  this.instance._off = true;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({
   _off: false
  }, 0).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(11));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("Ay+EEIAAizMAsNAAAIAACzg");
  mask_1.setTransform(161.4902, 25.9615);
  this.instance_1 = new lib.t4();
  this.instance_1.parent = this;
  this.instance_1.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_1.alpha = 0;
  this.instance_1._off = true;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({
   _off: false
  }, 0).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(16));
  var mask_2 = new cjs.Shape();
  mask_2._off = true;
  mask_2.graphics.p("Ay+CrIAAkGMAsNAAAIAAEGg");
  mask_2.setTransform(161.4902, 17.0611);
  this.instance_2 = new lib.t4();
  this.instance_2.parent = this;
  this.instance_2.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_2.alpha = 0;
  var maskedShapeInstanceList = [this.instance_2];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(151, 10, 172, 62);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A2GGEIAAlyMAsNAAAIAAFyg");
  mask.setTransform(141.4902, 38.7498);
  this.instance = new lib.t3();
  this.instance.parent = this;
  this.instance.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance.alpha = 0;
  this.instance._off = true;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
   _off: false
  }, 0).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(16));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("A2GD6IAAnzMAsNAAAIAAHzg");
  mask_1.setTransform(141.4902, 15);
  this.instance_1 = new lib.t3();
  this.instance_1.parent = this;
  this.instance_1.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_1.alpha = 0;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(149, 16, 134, 45.3);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AtHGNIAAlxMAsNAAAIAAFxg");
  mask.setTransform(198.9902, 39.7498);
  this.instance = new lib.t2();
  this.instance.parent = this;
  this.instance.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance.alpha = 0;
  this.instance._off = true;
  var maskedShapeInstanceList = [this.instance];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({
   _off: false
  }, 0).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(16));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("AtHD6IAAnzMAsNAAAIAAHzg");
  mask_1.setTransform(198.9902, 17.5);
  this.instance_1 = new lib.t2();
  this.instance_1.parent = this;
  this.instance_1.setTransform(78, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_1.alpha = 0;
  var maskedShapeInstanceList = [this.instance_1];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
   x: 108,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(21));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(154, 18, 244, 49.099999999999994);
 (lib._new = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.orange();
  this.instance.parent = this;
  this.instance.setTransform(52, 52, 1, 1, 0, 0, 0, 52, 52);
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   scaleX: 1.0787,
   scaleY: 1.0787,
   x: 52.05,
   y: 52.05
  }, 12, cjs.Ease.get(1)).to({
   scaleX: 1,
   scaleY: 1,
   x: 52,
   y: 52
  }, 12, cjs.Ease.get(1)).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-4, -4, 134, 112.2);
 (lib.fish02_float = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.fish02();
  this.instance.parent = this;
  this.instance.setTransform(114, 103.7, 1, 1, 0, 0, 0, 114, 103.7);
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   y: 98.7
  }, 9, cjs.Ease.get(-1)).to({
   y: 93.7
  }, 10, cjs.Ease.get(1)).to({
   y: 98.7
  }, 10, cjs.Ease.get(-1)).to({
   y: 103.7
  }, 10, cjs.Ease.get(1)).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -10, 230.8, 187.4);
 (lib.bubble_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.b1();
  this.instance.parent = this;
  this.instance.setTransform(149.4, 149.4, 1, 1, 0, 0, 0, 149.4, 149.4);
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   y: 143.75
  }, 9, cjs.Ease.get(-1)).to({
   y: 137.45
  }, 10, cjs.Ease.get(1)).to({
   y: 143.45
  }, 10, cjs.Ease.get(-1)).to({
   y: 149.4
  }, 10, cjs.Ease.get(1)).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, -11.9, 298.8, 310.7);
 (lib.fish01_float = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.bubble_1();
  this.instance.parent = this;
  this.instance.setTransform(40, 98.7, 0.0337, 0.0337, 0, 0, 0, 145.6, 154.5);
  this.instance._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({
   _off: false
  }, 0).to({
   regX: 145.9,
   regY: 153.2,
   scaleX: 0.1707,
   scaleY: 0.1707,
   x: -20,
   y: 58.7
  }, 10, cjs.Ease.get(0.5)).to({
   regX: 145.7,
   regY: 154.5,
   scaleX: 0.034,
   scaleY: 0.034,
   y: 38.7
  }, 10, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(76));
  this.instance_1 = new lib.bubble_1();
  this.instance_1.parent = this;
  this.instance_1.setTransform(40, 98.7, 0.0337, 0.0337, 0, 0, 0, 145.6, 154.5);
  this.instance_1._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({
   _off: false
  }, 0).to({
   regX: 145.9,
   regY: 153.2,
   scaleX: 0.1707,
   scaleY: 0.1707,
   x: -30,
   y: 78.7
  }, 10, cjs.Ease.get(0.5)).to({
   regX: 145.7,
   regY: 154.5,
   scaleX: 0.034,
   scaleY: 0.034,
   x: -10,
   y: 48.7
  }, 10, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(81));
  this.instance_2 = new lib.bubble_1();
  this.instance_2.parent = this;
  this.instance_2.setTransform(40, 98.7, 0.0337, 0.0337, 0, 0, 0, 145.6, 154.5);
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({
   _off: false
  }, 0).to({
   regX: 145.9,
   regY: 153.2,
   scaleX: 0.1707,
   scaleY: 0.1707,
   x: -30,
   y: 68.7
  }, 10, cjs.Ease.get(0.5)).to({
   regX: 145.7,
   regY: 154.5,
   scaleX: 0.034,
   scaleY: 0.034,
   x: -40,
   y: 28.7
  }, 10, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(86));
  this.instance_3 = new lib.bubble_1();
  this.instance_3.parent = this;
  this.instance_3.setTransform(40, 98.7, 0.0337, 0.0337, 0, 0, 0, 145.6, 154.5);
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({
   _off: false
  }, 0).to({
   regX: 145.9,
   regY: 153.2,
   scaleX: 0.1707,
   scaleY: 0.1707,
   x: -20,
   y: 58.7
  }, 10, cjs.Ease.get(0.5)).to({
   regX: 145.7,
   regY: 154.5,
   scaleX: 0.034,
   scaleY: 0.034,
   y: 38.7
  }, 10, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(91));
  this.instance_4 = new lib.fish01();
  this.instance_4.parent = this;
  this.instance_4.setTransform(114, 103.7, 1, 1, 0, 0, 0, 114, 103.7);
  this.timeline.addTween(cjs.Tween.get(this.instance_4).to({
   y: 98.7
  }, 9, cjs.Ease.get(-1)).to({
   y: 93.7
  }, 10, cjs.Ease.get(1)).to({
   y: 98.7
  }, 10, cjs.Ease.get(-1)).to({
   y: 103.7
  }, 10, cjs.Ease.get(1)).to({
   y: 98.7
  }, 9, cjs.Ease.get(-1)).to({
   y: 93.7
  }, 10, cjs.Ease.get(1)).to({
   y: 98.7
  }, 10, cjs.Ease.get(-1)).to({
   y: 103.7
  }, 10, cjs.Ease.get(1)).to({
   y: 98.7
  }, 9, cjs.Ease.get(-1)).to({
   y: 93.7
  }, 10, cjs.Ease.get(1)).to({
   y: 98.7
  }, 10, cjs.Ease.get(-1)).to({
   y: 103.7
  }, 10, cjs.Ease.get(1)).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-54.9, -10, 283, 217.5);
 (lib.content = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {
   cvr_frame1_3: 94,
   "cvr_frame#2": 156,
   cvr_stay: 178,
   cvr_frame3_1: 265
  });
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(340).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(-1)).wait(1));
  this.instance_1 = new lib.logo();
  this.instance_1.parent = this;
  this.instance_1.setTransform(112.5, 26.1, 1, 1, 0, 0, 0, 112.5, 26.1);
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(85).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(162));
  this.instance_2 = new lib.txt02("synched", 0, false);
  this.instance_2.parent = this;
  this.instance_2.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({
   _off: false
  }, 0).wait(75).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(260));
  this.instance_3 = new lib.gr();
  this.instance_3.parent = this;
  this.instance_3.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300);
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(85).to({
   regY: 300.1,
   y: 300.1,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(162));
  this.instance_4 = new lib.l4();
  this.instance_4.parent = this;
  this.instance_4.setTransform(149.5, 40.1, 1, 1, 0, 0, 0, 149.5, 40.1);
  this.instance_4.alpha = 0;
  this.instance_4._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(296).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(61));
  this.instance_5 = new lib.black_plate();
  this.instance_5.parent = this;
  this.instance_5.alpha = 0;
  this.instance_5._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(280).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).wait(76));
  this.instance_6 = new lib.txt04("synched", 0, false);
  this.instance_6.parent = this;
  this.instance_6.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({
   _off: false
  }, 0).to({
   _off: true
  }, 85).wait(75));
  this.instance_7 = new lib.fish02_float();
  this.instance_7.parent = this;
  this.instance_7.setTransform(806.65, 43.5, 0.6113, 0.6113, 0, 0, 0, 114.2, 103.8);
  this.instance_7._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(201).to({
   _off: false
  }, 0).to({
   x: 477.7
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 81).wait(75));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_216 = new cjs.Graphics().p("AZQDvQgQgQAAgXQAAgXAQgQQAQgQAXAAQAXAAAQAQQAQAQAAAXQAAAXgQAQQgQAQgXAAQgXAAgQgQg");
  var mask_graphics_217 = new cjs.Graphics().p("AYgD3QgcgcAAgnQAAgnAcgcQAcgcAnAAQAnAAAcAcQAcAcAAAnQAAAngcAcQgcAcgnAAQgnAAgcgcg");
  var mask_graphics_218 = new cjs.Graphics().p("AXzD/QgmgnAAg2QAAg3AmgnQAngmA2AAQA3AAAnAmQAmAnAAA3QAAA2gmAnQgnAmg3AAQg2AAgngmg");
  var mask_graphics_219 = new cjs.Graphics().p("AXKEGQgwgxAAhFQAAhEAwgxQAxgvBEAAQBFAAAxAvQAwAxAABEQAABFgwAxQgxAwhFAAQhEAAgxgwg");
  var mask_graphics_220 = new cjs.Graphics().p("AWlEMQg6g5AAhSQAAhSA6g4QA5g6BSAAQBSAAA5A6QA6A4AABSQAABSg6A5Qg5A6hSAAQhSAAg5g6g");
  var mask_graphics_221 = new cjs.Graphics().p("AWDESQhChCAAhdQAAhdBChBQBChCBdAAQBdAABCBCQBCBBAABdQAABdhCBCQhCBChdAAQhdAAhChCg");
  var mask_graphics_222 = new cjs.Graphics().p("AVkEXQhJhJAAhoQAAhmBJhKQBKhJBnAAQBoAABJBJQBKBKAABmQAABohKBJQhJBKhoAAQhnAAhKhKg");
  var mask_graphics_223 = new cjs.Graphics().p("AVJEcQhPhQAAhxQAAhwBPhQQBQhPBxAAQBxAABQBPQBQBQAABwQAABxhQBQQhQBQhxAAQhxAAhQhQg");
  var mask_graphics_224 = new cjs.Graphics().p("AUyEgQhVhWAAh4QAAh4BVhWQBWhVB5AAQB4AABWBVQBVBWAAB4QAAB4hVBWQhWBVh4AAQh5AAhWhVg");
  var mask_graphics_225 = new cjs.Graphics().p("AUfEjQhbhaAAiAQAAh+BbhaQBahbB/AAQCAAABaBbQBaBaAAB+QAACAhaBaQhaBaiAAAQh/AAhahag");
  var mask_graphics_226 = new cjs.Graphics().p("AUPEmQhfheAAiFQAAiEBfheQBehfCFAAQCFAABeBfQBeBeAACEQAACFheBeQheBeiFAAQiFAAheheg");
  var mask_graphics_227 = new cjs.Graphics().p("AUCEoQhhhhAAiJQAAiJBhhhQBhhhCKAAQCJAABhBhQBhBhAACJQAACJhhBhQhhBhiJAAQiKAAhhhhg");
  var mask_graphics_228 = new cjs.Graphics().p("AT5EqQhjhkAAiMQAAiMBjhjQBjhjCNAAQCMAABkBjQBjBjAACMQAACMhjBkQhkBjiMAAQiNAAhjhjg");
  var mask_graphics_229 = new cjs.Graphics().p("AT0ErQhlhlAAiOQAAiOBlhkQBkhlCPAAQCOAABlBlQBkBkAACOQAACOhkBlQhlBkiOAAQiPAAhkhkg");
  var mask_graphics_230 = new cjs.Graphics().p("ATyErQhlhlAAiPQAAiOBlhlQBlhlCPAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAQiPAAhlhlg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(216).to({
   graphics: mask_graphics_216,
   x: 170.9944,
   y: 25.4944
  }).wait(1).to({
   graphics: mask_graphics_217,
   x: 172.9909,
   y: 27.4909
  }).wait(1).to({
   graphics: mask_graphics_218,
   x: 174.8396,
   y: 29.3396
  }).wait(1).to({
   graphics: mask_graphics_219,
   x: 176.5403,
   y: 31.0403
  }).wait(1).to({
   graphics: mask_graphics_220,
   x: 178.0932,
   y: 32.5932
  }).wait(1).to({
   graphics: mask_graphics_221,
   x: 179.4982,
   y: 33.9982
  }).wait(1).to({
   graphics: mask_graphics_222,
   x: 180.7553,
   y: 35.2553
  }).wait(1).to({
   graphics: mask_graphics_223,
   x: 181.8644,
   y: 36.3644
  }).wait(1).to({
   graphics: mask_graphics_224,
   x: 182.8257,
   y: 37.3257
  }).wait(1).to({
   graphics: mask_graphics_225,
   x: 183.6392,
   y: 38.1392
  }).wait(1).to({
   graphics: mask_graphics_226,
   x: 184.3047,
   y: 38.8047
  }).wait(1).to({
   graphics: mask_graphics_227,
   x: 184.8223,
   y: 39.3223
  }).wait(1).to({
   graphics: mask_graphics_228,
   x: 185.192,
   y: 39.692
  }).wait(1).to({
   graphics: mask_graphics_229,
   x: 185.4139,
   y: 39.9139
  }).wait(1).to({
   graphics: mask_graphics_230,
   x: 185.5001,
   y: 40.0001
  }).wait(66).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(75));
  this.instance_8 = new lib.icon03();
  this.instance_8.parent = this;
  this.instance_8.setTransform(336.05, 45.35, 0.4956, 0.4956, 0, 0, 0, 70.7, 71.3);
  this.instance_8._off = true;
  var maskedShapeInstanceList = [this.instance_8];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(216).to({
   _off: false
  }, 0).to({
   _off: true
  }, 80).wait(75));
  this.instance_9 = new lib.bubble_1();
  this.instance_9.parent = this;
  this.instance_9.setTransform(336.65, 44.8, 0.0529, 0.0529, 0, 0, 0, 151.3, 151.3);
  this.instance_9._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211).to({
   _off: false
  }, 0).to({
   regX: 151.1,
   regY: 151,
   scaleX: 0.2912,
   scaleY: 0.2912
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 71).wait(75));
  this.instance_10 = new lib.bubble_1();
  this.instance_10.parent = this;
  this.instance_10.setTransform(215.45, 41.55, 0.0605, 0.0605, 0, 0, 0, 152, 151.1);
  this.instance_10._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(206).to({
   _off: false
  }, 0).to({
   regX: 151.7,
   regY: 151.2,
   scaleX: 0.5823,
   scaleY: 0.5823,
   x: 215.5
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 76).wait(75));
  this.instance_11 = new lib.black_plate();
  this.instance_11.parent = this;
  this.instance_11.alpha = 0;
  this.instance_11._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(193).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(162));
  this.instance_12 = new lib.l3();
  this.instance_12.parent = this;
  this.instance_12.setTransform(149.5, 129.1, 1, 1, 0, 0, 0, 149.5, 40.1);
  this.instance_12.alpha = 0;
  this.instance_12._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(121).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 74).wait(162));
  this.instance_13 = new lib.packshot_1();
  this.instance_13.parent = this;
  this.instance_13.setTransform(792.9, 39, 0.5105, 0.5105, 0, 0, 0, 117.5, 56.8);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(101).to({
   _off: false
  }, 0).to({
   x: 480
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 94).wait(162));
  this.instance_14 = new lib.txt03("synched", 0, false);
  this.instance_14.parent = this;
  this.instance_14.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_14._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(111).to({
   _off: false
  }, 0).to({
   _off: true
  }, 98).wait(162));
  this.instance_15 = new lib.bubble_1();
  this.instance_15.parent = this;
  this.instance_15.setTransform(231.05, 32.55, 0.0681, 0.0681, 0, 0, 0, 151.2, 150.4);
  this.instance_15._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(106).to({
   _off: false
  }, 0).to({
   regX: 150.8,
   regY: 150.7,
   scaleX: 0.6961,
   scaleY: 0.6961,
   x: 231,
   y: 32.6
  }, 13, cjs.Ease.get(1)).to({
   _off: true
  }, 90).wait(162));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  var mask_1_graphics_116 = new cjs.Graphics().p("Ab7DeQgTgTAAgcQAAgbATgUQAUgTAbAAQAbAAAUATQATAUAAAbQAAAcgTATQgUATgbAAQgbAAgUgTg");
  var mask_1_graphics_117 = new cjs.Graphics().p("Aa3DqQgkgkAAgzQAAgzAkgkQAkgjAzAAQAzAAAjAjQAkAkAAAzQAAAzgkAkQgjAjgzAAQgzAAgkgjg");
  var mask_1_graphics_118 = new cjs.Graphics().p("AZ4D0QgzgzAAhIQAAhIAzgyQAzg0BJAAQBIAAAzA0QAzAyAABIQAABIgzAzQgzAzhIAAQhJAAgzgzg");
  var mask_1_graphics_119 = new cjs.Graphics().p("AY/D+QhChBAAhcQAAhcBChAQBBhBBcAAQBcAABBBBQBBBAAABcQAABchBBBQhBBBhcAAQhcAAhBhBg");
  var mask_1_graphics_120 = new cjs.Graphics().p("AYKEHQhOhOAAhuQAAhtBOhOQBOhOBuAAQBuAABOBOQBOBOAABtQAABuhOBOQhOBOhuAAQhuAAhOhOg");
  var mask_1_graphics_121 = new cjs.Graphics().p("AXaEPQhahZAAh/QAAh+BahZQBZhaB/AAQB/AABZBaQBaBZAAB+QAAB/haBZQhZBah/AAQh/AAhZhag");
  var mask_1_graphics_122 = new cjs.Graphics().p("AWvEWQhkhjAAiOQAAiMBkhkQBkhkCNAAQCNAABkBkQBkBkAACMQAACOhkBjQhkBkiNAAQiNAAhkhkg");
  var mask_1_graphics_123 = new cjs.Graphics().p("AWJEdQhthtAAiaQAAiaBthtQBthtCbAAQCaAABtBtQBtBtAACaQAACahtBtQhtBtiaAAQibAAhthtg");
  var mask_1_graphics_124 = new cjs.Graphics().p("AVpEiQh1h1AAilQAAikB1h1QB1h1ClAAQClAAB1B1QB1B1AACkQAAClh1B1Qh1B1ilAAQilAAh1h1g");
  var mask_1_graphics_125 = new cjs.Graphics().p("AVNErQh8h8AAivQAAiuB8h8QB8h7CvAAQCuAAB8B7QB8B8AACuQAACvh8B8Qh8B7iuAAQivAAh8h7g");
  var mask_1_graphics_126 = new cjs.Graphics().p("AU2E4QiBiBAAi3QAAi2CBiBQCBiBC3AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi3AAiBiBg");
  var mask_1_graphics_127 = new cjs.Graphics().p("AUlFCQiGiFAAi9QAAi8CGiFQCFiFC9AAQC9AACFCFQCFCFAAC8QAAC9iFCFQiFCFi9AAQi9AAiFiFg");
  var mask_1_graphics_128 = new cjs.Graphics().p("AUYFJQiIiIAAjBQAAjACIiIQCJiJDBAAQDBAACICJQCICIAADAQAADBiICIQiICJjBAAQjBAAiJiJg");
  var mask_1_graphics_129 = new cjs.Graphics().p("AURFOQiLiKAAjEQAAjDCLiKQCKiKDDAAQDEAACKCKQCLCKAADDQAADEiLCKQiKCKjEAAQjDAAiKiKg");
  var mask_1_graphics_130 = new cjs.Graphics().p("AUNFPQiKiLAAjEQAAjDCKiLQCLiLDFAAQDEAACLCLQCLCLAADDQAADEiLCLQiLCLjEAAQjFAAiLiLg");
  this.timeline.addTween(cjs.Tween.get(mask_1).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(116).to({
   graphics: mask_1_graphics_116,
   x: 190.0191,
   y: 24.1441
  }).wait(1).to({
   graphics: mask_1_graphics_117,
   x: 192.8213,
   y: 26.9427
  }).wait(1).to({
   graphics: mask_1_graphics_118,
   x: 195.4158,
   y: 29.534
  }).wait(1).to({
   graphics: mask_1_graphics_119,
   x: 197.8029,
   y: 31.918
  }).wait(1).to({
   graphics: mask_1_graphics_120,
   x: 199.9823,
   y: 34.0947
  }).wait(1).to({
   graphics: mask_1_graphics_121,
   x: 201.9542,
   y: 36.0641
  }).wait(1).to({
   graphics: mask_1_graphics_122,
   x: 203.7185,
   y: 37.8261
  }).wait(1).to({
   graphics: mask_1_graphics_123,
   x: 205.2753,
   y: 39.3809
  }).wait(1).to({
   graphics: mask_1_graphics_124,
   x: 206.6244,
   y: 40.7284
  }).wait(1).to({
   graphics: mask_1_graphics_125,
   x: 207.7661,
   y: 41.5231
  }).wait(1).to({
   graphics: mask_1_graphics_126,
   x: 208.7001,
   y: 41.5154
  }).wait(1).to({
   graphics: mask_1_graphics_127,
   x: 209.4266,
   y: 41.5095
  }).wait(1).to({
   graphics: mask_1_graphics_128,
   x: 209.9455,
   y: 41.5052
  }).wait(1).to({
   graphics: mask_1_graphics_129,
   x: 210.2569,
   y: 41.5026
  }).wait(1).to({
   graphics: mask_1_graphics_130,
   x: 210.2929,
   y: 41.4679
  }).wait(79).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(162));
  this.instance_16 = new lib._new();
  this.instance_16.parent = this;
  this.instance_16.setTransform(376.85, 41.65, 0.6628, 0.6635, 0, 0, 0, 58.4, 52.3);
  this.instance_16._off = true;
  var maskedShapeInstanceList = [this.instance_16];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(116).to({
   _off: false
  }, 0).to({
   _off: true
  }, 93).wait(162));
  this.instance_17 = new lib.bubble_1();
  this.instance_17.parent = this;
  this.instance_17.setTransform(373.8, 43.2, 0.0339, 0.0339, 0, 0, 0, 153.3, 153.3);
  this.instance_17._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(111).to({
   _off: false
  }, 0).to({
   regX: 153.5,
   regY: 153.7,
   scaleX: 0.2945,
   scaleY: 0.2945
  }, 13, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(162));
  this.instance_18 = new lib.bg_g();
  this.instance_18.parent = this;
  this.instance_18.alpha = 0;
  this.instance_18._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(96).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 99).wait(162));
  this.instance_19 = new lib.bubble_1();
  this.instance_19.parent = this;
  this.instance_19.setTransform(268.3, 39.65, 0.0639, 0.0639, 0, 0, 0, 149.6, 149.6);
  this.instance_19._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(16).to({
   _off: false
  }, 0).to({
   regX: 149.5,
   regY: 149.3,
   scaleX: 0.6921,
   scaleY: 0.6921,
   x: 268.25,
   y: 39.7
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 80).wait(260));
  this.instance_20 = new lib.fish01_float("synched", 0, false);
  this.instance_20.parent = this;
  this.instance_20.setTransform(805.4, 40.05, 0.5238, 0.5244, 0, 0, 0, 117.6, 101);
  this.instance_20._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(11).to({
   _off: false
  }, 0).to({
   regX: 117.7,
   x: 498.95,
   startPosition: 13
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 86).wait(260));
  this.instance_21 = new lib.black_plate();
  this.instance_21.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(371));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-3, -72.3, 881, 215.5);
 (lib.JnJ_Motilegas_728x90 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(364, 44.8, 364, 45.2);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 728,
  height: 90,
  fps: 24,
  color: "#FFFFFF",
  opacity: 1.00,
  manifest: [{
   src: "bubble.png",
   id: "bubble"
  }, {
   src: "fish1.png",
   id: "fish1"
  }, {
   src: "fish2.png",
   id: "fish2"
  }, {
   src: "icon3.png",
   id: "icon3"
  }, {
   src: "packshot.png",
   id: "packshot"
  }, ],
  preloads: []
 };
 (lib.Stage = function(canvas) {
  createjs.Stage.call(this, canvas);
 }).prototype = p = new createjs.Stage();
 p.setAutoPlay = function(autoPlay) {
  this.tickEnabled = autoPlay;
 }
 p.play = function() {
  this.tickEnabled = true;
  this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
 }
 p.stop = function(ms) {
  if (ms) this.seek(ms);
  this.tickEnabled = false;
 }
 p.seek = function(ms) {
  this.tickEnabled = true;
  this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
 }
 p.getDuration = function() {
  return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
 }
 p.getTimelinePosition = function() {
  return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
 }
 an.bootcompsLoaded = an.bootcompsLoaded || [];
 if (!an.bootstrapListeners) {
  an.bootstrapListeners = [];
 }
 an.bootstrapCallback = function(fnCallback) {
  an.bootstrapListeners.push(fnCallback);
  if (an.bootcompsLoaded.length > 0) {
   for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
    fnCallback(an.bootcompsLoaded[i]);
   }
  }
 };
 an.compositions = an.compositions || {};
 an.compositions['1E4D562F91EE4B408F0AC49B20246D76'] = {
  getStage: function() {
   return exportRoot.getStage();
  },
  getLibrary: function() {
   return lib;
  },
  getSpriteSheet: function() {
   return ss;
  },
  getImages: function() {
   return img;
  }
 };
 an.compositionLoaded = function(id) {
  an.bootcompsLoaded.push(id);
  for (var j = 0; j < an.bootstrapListeners.length; j++) {
   an.bootstrapListeners[j](id);
  }
 }
 an.getComposition = function(id) {
  return an.compositions[id];
 }
 an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
  var lastW, lastH, lastS = 1;
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function resizeCanvas() {
   var w = lib.properties.width,
    h = lib.properties.height;
   var iw = window.innerWidth,
    ih = window.innerHeight;
   var pRatio = window.devicePixelRatio || 1,
    xRatio = iw / w,
    yRatio = ih / h,
    sRatio = 1;
   if (isResp) {
    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
     sRatio = lastS;
    } else if (!isScale) {
     if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
    } else if (scaleType == 1) {
     sRatio = Math.min(xRatio, yRatio);
    } else if (scaleType == 2) {
     sRatio = Math.max(xRatio, yRatio);
    }
   }
   domContainers[0].width = w * pRatio * sRatio;
   domContainers[0].height = h * pRatio * sRatio;
   domContainers.forEach(function(container) {
    container.style.width = w * sRatio + 'px';
    container.style.height = h * sRatio + 'px';
   });
   stage.scaleX = pRatio * sRatio;
   stage.scaleY = pRatio * sRatio;
   lastW = iw;
   lastH = ih;
   lastS = sRatio;
   stage.tickOnUpdate = false;
   stage.update();
   stage.tickOnUpdate = true;
  }
 }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;