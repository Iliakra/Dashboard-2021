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
 (lib.icon2 = function() {
  this.initialize(img.icon2);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 170, 172);
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
  this.shape.graphics.f("#0C593C").s().p("AAAALIgKASIgIgGIALgTIgRgGIACgLIASAIIAAgXIAJAAIAAAXIASgIIACALIgRAGIALATIgIAGg");
  this.shape.setTransform(193.5, 175.5);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AgoCKQgTgGgNgTQgMgQgEgRQgFgSAAgSIAuAAQgBAHACAJQACAKAEAHQAGANAJAGQAJAFAIACIALABQAHAAAHgCQAIgCAHgFQAJgJADgKQADgKgBgIIgBgMQgBgGgCgHQgDgHgIgEQgGgEgIgCQgIgBgGAAIgXAAIAAgoIAUAAIAMgBQAGgBAGgEQAFgDAFgHQADgIABgMQgBgMgDgIQgDgIgFgEQgHgGgIgCIgLgBQgGAAgIACQgIACgHAGQgJAHgDAKQgEAKAAAKIgtAAIABgSQACgKAEgLQADgLAHgJQANgRATgGQATgHAYAAIASACQALABALAFQALAEAKAIQAKAJAFALQAFALABAKQABAKAAAHQABAKgEAMQgDANgKAMIgIAHQgGADgHACIAAACQAJABAGAEQAGACAEAEQAJAHAGAOQAGAPAAAVQgBAXgHAQQgJAQgKAJQgJAHgQAFQgQAGgaAAIgCAAQgWAAgQgHg");
  this.shape_1.setTransform(180.15, 186.7267);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AA5CJIgRg6IhQAAIgQA6IgvAAIBSkRIArAAIBSERgAAeAmIgeh0IgdB0IA7AAg");
  this.shape_2.setTransform(159.925, 186.75);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AhWCJIAAkQIBXAAQAUgBARAFQARAFAOAPQALAPAEAQQADAQAAANQAAAZgHAQQgGAPgKAJQgOAOgQAEQgRAFgQgBIgpAAIAABlgAgogEIAkAAQAHAAAKgCQAJgCAIgIQADgEAEgIQADgIAAgMQAAgMgDgIQgDgIgEgFQgIgJgJgCQgKgCgHAAIgkAAg");
  this.shape_3.setTransform(140.775, 186.7475);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AgpBnQgHgBgHgEQgKgGgHgMQgHgMAAgUQgBgKADgIQACgKAGgHQAEgIAHgFQAHgDAJgDIATgGIAbgEIAJgDQAFgBACgDIACgEIABgLQAAgJgCgHQgCgIgGgFQgFgDgEgCIgHgBQgMABgGAFQgGAFgDAGIgDAKIgBAKIgpAAQAAgJADgLQACgKAGgKQAHgMALgGQALgHALgCQALgBAKAAQAJgBANADQANADANAIQANALAEANQAFAOgBATIAABOIABAOIABAGQADADADABIAHAAIAAAhIgKABIgNAAQgEAAgHgBQgFgBgFgFQgEgEgDgEIgDgLIgBAAQgEAHgDAFIgIAHQgHAEgIADQgKAEgLgBQgHAAgJgCgAAUAHIgDABIgIAEIgIACIgNADIgKAFQgHAEgDAGQgDAHABAHIAAAKQACAGAEAFIAGAEQAFADAEAAQAHAAAGgEQAGgDAFgIQAHgKACgNQADgNAAgKIAAgIIgDACg");
  this.shape_4.setTransform(112.8, 190.35);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgWBpQgMgCgKgGQgOgKgIgQQgHgPgBgTIApAAQAAAGACAIQACAGAEAGQAGAIAHACQAHACAFAAIAIgBQAFgBAGgEQAFgDADgHQADgGABgKQAAgGgCgGQgCgGgGgFQgFgDgGgBQgGgCgEABIgQAAIAAgfIANAAIAHgBQAFgBAGgDQAGgFACgHIABgLQAAgIgCgGQgCgGgEgDQgEgEgFgCIgIgBQgFAAgGACQgHADgFAHQgDAHgBAHIAAAKIgpAAQAAgOAEgMQAFgNAHgKQAMgLAOgEQAPgEAMAAQALAAAPADQAOADAMAMQAHAIAEAKQAFALAAANQAAAKgDAIQgCAIgHAHQgEAEgEACIgHAEIAAABQAFAAAGACQAGADAGAHQAGAHADAIQACAHAAAJQAAAOgEAKQgDAKgGAHQgFAHgFADQgMAKgOADQgPACgLAAQgKAAgMgCg");
  this.shape_5.setTransform(95.5042, 190.5);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AgpBnQgHgBgIgEQgJgFgHgMQgHgNAAgUQgBgKADgJQACgIAGgJQAEgHAHgFQAHgEAJgDIATgEIAbgGIAJgBQAFgCACgDIACgEIABgLQAAgJgCgHQgCgHgGgGQgEgEgFAAIgHgBQgMAAgGAFQgGAGgDAFIgDAKIgBALIgpAAQAAgKADgLQACgLAFgJQAIgMALgHQALgFALgDQALgCAKAAQAIABAOACQANACANAKQANAKAEANQAEAOAAATIAABOIABAOIABAFQACAEAEABIAHAAIAAAgIgKABIgNAAQgFABgGgCQgFgBgFgEQgFgEgCgEIgDgLIgBAAQgDAIgEAEIgHAGQgIAGgIACQgKAEgLAAQgHAAgJgDgAAUAHIgDACIgIADIgIACIgNAEQgFABgFACQgHAFgDAHQgDAGABAHIABAJQABAHAEAEIAGAGQAFABAEAAQAHAAAGgDQAGgDAGgIQAGgLACgMQADgNAAgLIAAgGIgDABg");
  this.shape_6.setTransform(198.65, 153.85);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AhHBjIgIgBIAAggQALADAHgEQAHgEAEgGQADgFACgKIACgbIABgvIAAhBIB6AAIAADFIgrAAIAAilIgmAAIAAAlIgBAgIAAAUIgBAMQgDAUgFANQgGAMgHAGQgHAHgKAEQgKAEgMAAIgIgBg");
  this.shape_7.setTransform(179.975, 154.075);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AgeCIIgNgBIgLgBIAAggIAGABIAIABQAKAAAFgHQAHgGACgMIAFgRIhIjFIAuAAIAsCQIABAAIAjiQIAqAAIg9DWIgGAUQgDALgIAKQgHAJgJAEQgIADgKAAIgDAAg");
  this.shape_8.setTransform(164.5, 157.6781);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgOBpQgKgCgLgFQgKgGgKgLQgKgNgGgUQgGgTAAgcIABgYQABgNAFgQQAFgQAKgMQANgQAPgFQAPgFANAAQAMAAAOAEQAPAEAOANQAKALAFAOQAGAOABAOIgpAAIgDgOQgCgHgEgFQgEgIgGgDQgGgFgJAAQgIAAgGAFQgHAFgEAJQgEAJgCALQgDAKAAAKIgBAQQAAAMACAOQACAOAFALQAGAMAHAFQAIAGAIAAQAJAAAGgGQAGgFAEgIQAEgJABgJIACgLIAoAAQAAALgFAOQgEAPgJAMQgNARgPAGQgQAFgNAAIgRgCg");
  this.shape_9.setTransform(148.125, 154);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AAfBjIAAilIg9AAIAAClIgrAAIAAjFICTAAIAADFg");
  this.shape_10.setTransform(130.075, 154);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgpBnQgIgBgHgEQgJgFgHgMQgHgNAAgUQAAgKACgJQACgIAGgJQAEgHAHgFQAHgEAJgDIATgEIAbgGIAJgBQAFgCADgDIABgEIABgLQAAgJgCgHQgCgHgGgGQgEgEgFAAIgHgBQgMAAgGAFQgGAGgDAFIgDAKIgBALIgpAAQAAgKACgLQADgLAFgJQAJgMAKgHQALgFALgDQALgCAKAAQAIABAOACQANACANAKQANAKAEANQAEAOAAATIAABOIABAOIABAFQADAEADABIAHAAIAAAgIgLABIgMAAQgFABgFgCQgHgBgEgEQgEgEgDgEIgDgLIgBAAQgDAIgEAEIgHAGQgIAGgIACQgKAEgLAAQgHAAgJgDgAAVAHIgEACIgIADIgIACIgNAEQgGABgEACQgHAFgDAHQgCAGAAAHIABAJQABAHAEAEIAGAGQAEABAFAAQAHAAAGgDQAFgDAHgIQAGgLADgMQACgNAAgLIAAgGIgCABg");
  this.shape_11.setTransform(112.15, 153.85);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AAZBjIg2hgIAABgIgrAAIAAjFIArAAIAABTIAzhTIAwAAIhCBdIBFBog");
  this.shape_12.setTransform(96.55, 154);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AA5CJIgRg6IhQAAIgQA6IgvAAIBSkRIArAAIBSERgAAeAmIgeh0IgdB0IA7AAg");
  this.shape_13.setTransform(166.025, 113.75);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AAsCJIAAh7IhXAAIAAB7IguAAIAAkRIAuAAIAABtIBXAAIAAhtIAuAAIAAERg");
  this.shape_14.setTransform(144.975, 113.75);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("ABMCnIAAg9IiXAAIAAA9IgnAAIgDhnIAVAAIAHgOQAGgLAHgSQAGgSAFgXIADgdIADgeIAAgcIAAg7ICSAAIAADmIAeAAIgBBngAgRhcQAAATgBASQgBATgDARQgEAYgGAVQgHAVgIARIBYAAIAAi9Ig6AAg");
  this.shape_15.setTransform(122.3, 116.825);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAACRQgPAAgRgEQgRgFgQgOQgYgWgJgfQgKgfAAgmQAAgkAKggQAJgfAYgVQAQgPARgEQARgFAPAAQAQAAARAFQARAEARAPQAWAVAKAfQAJAgAAAkQAAAmgJAfQgKAfgWAWQgRAOgRAFQgPAEgPAAIgDAAgAgShjQgKAEgJALQgJALgEAPQgGAOgBAQQgCAQAAAMQAAAOACAPQABAQAGAPQAEAOAJALQAJAMAKADQAKAEAIAAQAJAAAKgEQAKgDAKgMQAIgLAFgOQAEgPADgQQABgPAAgOQAAgMgBgQQgDgQgEgOQgFgPgIgLQgKgLgKgEQgKgEgJABIgBAAQgIAAgJADg");
  this.shape_16.setTransform(99.25, 113.7275);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(85, 89, 372, 124.5), null);
 (lib.t3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AgXCJIAAg1IAuAAIAAA1gAgMAzIgLhdIAAhdIAuAAIAABdIgKBdg");
  this.shape.setTransform(195.5, 157.25);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AgWBpQgMgCgKgHQgOgJgIgQQgHgPgBgTIApAAQAAAGACAIQACAGAEAGQAGAHAHADQAHACAFAAIAIgBQAFgBAGgEQAFgEADgGQADgGABgLQAAgFgCgGQgCgHgGgEQgFgDgGgCQgGAAgEAAIgQAAIAAgfIANAAIAHgBQAFgBAGgDQAGgFACgGIABgMQAAgIgCgGQgCgGgEgDQgEgEgFgCIgIgBQgFAAgGACQgHADgFAHQgDAHgBAHIAAAKIgpAAQAAgOAEgNQAFgNAHgIQAMgMAOgEQAPgEAMAAQALAAAPADQAOAEAMALQAHAIAEALQAFAKAAANQAAAKgDAIQgCAIgHAHQgEAEgEADIgHADIAAABQAFABAGABQAGADAGAHQAGAHADAHQACAIAAAJQAAAOgEALQgDAJgGAHQgFAHgFAEQgMAIgOADQgPADgLAAQgKAAgMgCg");
  this.shape_1.setTransform(181.7042, 161);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AgoBnQgIgBgHgEQgKgFgHgMQgHgNgBgUQAAgKADgIQACgKAFgIQAGgHAGgFQAHgDAJgDIATgGIAbgEIAJgCQAFgCADgDIACgEIABgLQAAgIgCgIQgDgHgFgGQgFgDgFgBIgHgBQgMAAgGAFQgGAFgDAGIgDAKIgBALIgpAAQAAgKACgLQADgKAFgKQAJgMAKgHQALgFALgDQAMgCAJABQAJAAANACQAOACAMAKQAMAKAFANQAEAOAAATIAABOIABAOIACAGQABADADABIAHAAIAAAhIgKAAIgLAAQgGABgFgBQgGgCgGgEQgEgDgCgFIgDgLIgBAAQgEAIgEAEIgGAGQgIAFgIADQgJADgMAAQgHAAgIgCgAAVAHIgEACIgIADIgJACIgMAEQgFABgEACQgJAFgCAGQgDAHAAAHIABAKQACAFAEAFIAHAGQADACAGAAQAFgBAHgDQAFgDAHgIQAGgLADgMQADgNAAgLIAAgHIgDACg");
  this.shape_2.setTransform(164.95, 160.85);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("Ag6BjIAAjFIB0AAIAAAgIhJAAIAAClg");
  this.shape_3.setTransform(150.7, 161);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AgaBnQgPgFgOgPQgJgKgIgUQgHgSgBghIACgXQABgPAFgPQAFgPAKgNQAOgQAQgGQAQgFANAAQAPAAARAGQAQAHAMATQAJAOAFAVQAEAVAAAeIhyAAQAAAMADAOQADANAGAJQAHAKAHACQAHADAFAAQAFAAAGgDQAIgCAGgJQADgDACgGQACgFAAgGIAqAAQgCAOgGAMQgFALgHAIQgOAOgPAEQgQADgMAAQgMAAgPgEgAgNhFQgGADgEAGQgGAJgDAMQgDALAAAJIBGAAIAAgKIgCgNQgCgIgEgHQgEgJgIgEQgGgEgIAAQgIAAgGAFg");
  this.shape_4.setTransform(134, 161);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AhHBjIgIgBIAAggQALADAHgEQAHgEAEgGQADgFACgKIACgbIABgvIAAhBIB6AAIAADFIgrAAIAAilIgmAAIAAAlIgBAgIAAAUIgBAMQgDAUgFANQgGAMgHAGQgHAHgKAEQgKAEgMAAIgIgBg");
  this.shape_5.setTransform(115.125, 161.075);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AAjBjIAAiMIhBCMIguAAIAAjFIArAAIAACMIBAiMIAuAAIAADFg");
  this.shape_6.setTransform(98.125, 161);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AgVBjIAAilIg0AAIAAggICTAAIAAAgIg1AAIAAClg");
  this.shape_7.setTransform(81.55, 161);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AgqBfQgSgMgKgYQgGgNgDgPQgDgQAAgPQAAgOADgQQADgOAGgOQAKgYASgMQASgMAYAAQAZAAASAMQASAMAKAYQAGAOADAOQADAQAAAOQAAAPgDAQQgDAPgGANQgKAYgSAMQgSAMgZAAQgYAAgSgMgAgQhEQgHAGgFAKQgDAIgCAJIgDAUIAAAPIAAAQIADATQACAKADAIQAFALAHAFQAHAGAJAAQAKAAAHgGQAHgFAFgLQADgIACgKIADgTIAAgQIAAgPIgDgUQgCgJgDgIQgFgKgHgGQgHgGgKAAQgJAAgHAGg");
  this.shape_8.setTransform(65.325, 161);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("ABLCJIAAi5IACgeIgCAAIg5DXIgkAAIg4jXIgCAAIACAeIAAC5IguAAIAAkQIBCAAIA2DOIA3jOIBCAAIAAEQg");
  this.shape_9.setTransform(41.75, 157.25);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgaBmQgPgEgOgPQgKgKgGgTQgIgUAAggIABgYQABgOAFgPQAFgPAKgNQAOgQAQgFQAPgGAOAAQAQAAAQAHQAQAHANASQAIAOAEAVQAFAVABAeIhzAAQgBAMADAOQAEANAGAKQAIAIAGADQAHADAEAAQAFAAAHgCQAIgDAGgIQAEgFABgEQACgGABgGIApAAQgCANgFAMQgGAMgIAIQgNAOgPADQgQAEgMAAQgMAAgPgFgAgNhGQgGAFgEAEQgHAKgCALQgDAMABAJIBGAAIAAgJIgDgOQgBgIgEgHQgGgIgHgFQgGgEgIAAQgHABgHADg");
  this.shape_10.setTransform(209, 124.5);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgUBjIAAilIg1AAIAAggICTAAIAAAgIg1AAIAAClg");
  this.shape_11.setTransform(193, 124.5);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AAjCIIAAiMIhBCMIguAAIAAjFIArAAIAACNIBAiNIAuAAIAADFgAgUhSIgOgHIgHgGQgGgFgGgKQgGgKgCgQIAjAAQAAAFACAFQABAFADAEQAFAGAGACQAFACAEAAQAFAAAGgCQAFgCAFgGQADgEACgFIABgKIAjAAQgCAQgGAKQgGAKgGAFIgHAGIgNAHQgJACgNAAQgMAAgIgCg");
  this.shape_12.setTransform(176.425, 120.75);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgoBoQgIgCgHgEQgKgGgHgMQgHgMgBgUQAAgKADgJQACgIAFgIQAGgIAGgFQAHgDAJgEIATgEIAbgGIAJgBQAFgCADgDIACgEIABgLQAAgIgCgIQgDgIgFgEQgFgFgFgBIgHAAQgMAAgGAGQgGAFgDAFIgDAKIgBAKIgpAAQAAgJACgLQADgKAFgJQAJgNAKgGQALgHALgBQAMgCAJgBQAJAAANADQAOACAMAJQAMALAFAOQAEAOAAARIAABPIABAPIACAEQABAEADABIAHAAIAAAgIgKABIgLAAQgGABgFgCQgGAAgGgFQgEgDgCgFIgDgKIgBAAQgEAGgEAFIgGAHQgIAFgIACQgJADgMABQgHAAgIgCgAAVAHIgEABIgIAEIgJACIgMADQgFACgEADQgJAEgCAHQgDAGAAAHIABAJQACAGAEAGIAHAEQADACAGAAQAFABAHgEQAFgDAHgIQAGgLADgMQADgNAAgKIAAgHIgDABg");
  this.shape_13.setTransform(158.2, 124.35);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AA7BjIAAh9IABgUIgBAAIgqCRIghAAIgpiRIgCAAIACAUIAAB9IgqAAIAAjFIA4AAIArCTIAsiTIA4AAIAADFg");
  this.shape_14.setTransform(137.575, 124.5);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AAjBjIAAiNIhBCNIguAAIAAjFIArAAIAACNIBAiNIAuAAIAADFg");
  this.shape_15.setTransform(116.125, 124.5);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAeBjIAAhYIg7AAIAABYIgrAAIAAjFIArAAIAABOIA7AAIAAhOIArAAIAADFg");
  this.shape_16.setTransform(97.425, 124.5);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AAjBjIAAiNIhBCNIguAAIAAjFIArAAIAACNIBAiNIAuAAIAADFg");
  this.shape_17.setTransform(78.725, 124.5);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AhSCLIAAkNIAoAAIAAATIABAAIAHgJIAJgIQAGgEAIgDQAJgCAJgBQAPAAAMAGQANAGALANQAMAPAFAQQAFARABAOQACANgBAGIgBAWQgCAMgDANQgEAMgFALQgGAJgIAJQgIAIgMAFQgLAFgPABQgHAAgHgDQgIgBgGgFIgKgIIgHgJIgBAAIAABagAgShlQgJAGgHAPQgFAMgBANIgCAZIABAQIADATQADAKAGAJQAGAKAHAFQAHAEAHAAQAEAAAIgDQAHgDAIgMQAFgHADgNQAEgNAAgVIgBgZQgCgMgFgNQgHgQgIgGQgJgFgHAAQgHAAgJAFg");
  this.shape_18.setTransform(59.9563, 127.7);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AArCIIAAjmIhVAAIAADmIguAAIAAkQICxAAIAAEQg");
  this.shape_19.setTransform(38.625, 120.75);
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
 }).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(25, 96, 269, 88), null);
 (lib.t2_1_t2_office = function() {
  this.initialize(img.t2_1_t2_office);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 212, 79);
 (lib.t2_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_t2 = new lib.t2_1_t2_office();
  this.cvr_t2.name = "cvr_t2";
  this.cvr_t2.parent = this;
  this.cvr_t2.setTransform(26, 324, 0.5, 0.5);
  this.timeline.addTween(cjs.Tween.get(this.cvr_t2).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.cvr_t2).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(24, 322, 216, 82.69999999999999), null);
 (lib.t2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AAAAMIgLAUIgIgIIALgUIgSgGIADgLIASAHIAAgYIALAAIAAAYIASgHIADALIgSAGIALAUIgIAIg");
  this.shape.setTransform(128.75, 182.5);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AAiBhIAAiKIg/CKIgtAAIAAjBIAqAAIAACJIA+iJIAtAAIAADBg");
  this.shape_1.setTransform(117.975, 197.4);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AhFBhIgIgBIAAgfQALACAHgEQAGgDAEgHQADgFACgJQACgJABgSIAAgtIAAg/IB3AAIAADAIgqAAIAAihIglAAIAAAkIgBAfIAAAUIgBALQgCAUgGAMQgFAMgHAGQgHAHgKADQgKAEgMAAIgHAAg");
  this.shape_2.setTransform(99.025, 197.475);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgpBcQgRgMgKgWQgGgOgDgPQgDgPAAgOQAAgNADgPQADgQAGgNQAKgXARgLQASgMAXAAQAYAAASAMQARALAKAXQAGANADAQQADAPAAANQAAAOgDAPQgDAPgGAOQgKAWgRAMQgSAMgYAAQgXAAgSgMgAgQhDQgHAGgEAKQgDAIgCAJIgDATIAAAPIAAAQIADATQACAJADAIQAEAKAHAFQAHAGAJAAQAKAAAHgGQAHgFAEgKQADgIACgJIADgTIABgQIgBgPIgDgTQgCgJgDgIQgEgKgHgGQgHgFgKAAQgJAAgHAFg");
  this.shape_3.setTransform(82.825, 197.4);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AAACQQgOAAgLgEQgMgEgIgHQgIgGgFgGQgLgOgFgRQgFgRgBgRIgBggQAAgdACgTQACgUACgMQADgLACgGQAFgOAJgLQAKgLAOgHQAKgDAMgCIAYgEQANgCAFgEQAFgEAAgEIAeAAIgCAMIgDALQgGAOgLAGQgMAGgPACIgbAGQgMAEgKAIQgKAJgFAQIgDAOIgCANIAAALIACAAIAFgOQAEgIAFgGQAIgKALgGQALgFAOAAQAPAAAMAFQALAGAIAIQAJALAGANQAHAOACAOQADAPAAAPQAAASgFAUQgFATgLAQQgNAQgQAHQgOAHgQAAIgCAAgAgMgYQgIAFgGAMQgHAMgCANQgCAOAAALIACAXQACANAGANQAHANAIAEQAHAEAGAAQAGAAAIgFQAHgEAHgMQAGgNABgNQACgOAAgJIAAgQIgDgSQgCgJgEgIQgGgLgHgEQgHgFgHAAQgGAAgIAEg");
  this.shape_4.setTransform(64.675, 193.4017);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AAiBhIAAiKIg/CKIgtAAIAAjBIAqAAIAACJIA+iJIAtAAIAADBg");
  this.shape_5.setTransform(37.725, 197.4);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AAiBgIAAiIIg/CIIgtAAIAAi/IAqAAIAACJIA+iJIAtAAIAAC/g");
  this.shape_6.setTransform(264.425, 160.1);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AAiBgIAAiIIg/CIIgtAAIAAi/IAqAAIAACJIA+iJIAtAAIAAC/g");
  this.shape_7.setTransform(246.775, 160.1);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AAdBgIAAhVIg5AAIAABVIgqAAIAAi/IAqAAIAABLIA5AAIAAhLIAqAAIAAC/g");
  this.shape_8.setTransform(229.575, 160.1);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgnBlQgIgBgHgEQgJgFgHgMQgHgMAAgUQAAgJACgJQACgJAFgHQAFgIAHgFIAPgGQAIgDALgCIAagFIAIgBQAFgCADgDIACgEIABgLQAAgIgCgHQgDgIgFgEQgFgEgEgBIgHgBQgLAAgGAFQgHAGgCAFIgDAJIgBALIgoAAQAAgKACgKQADgKAFgJQAIgMAKgGQALgHALgBQALgDAJABQAIgBANADQANACANAJQAMAKAEAOQAFANgBASIAABMIABAOIACAFQACAEACABIAHAAIAAAfIgJABIgMAAQgFABgGgCQgFgBgGgEQgDgDgDgFQgCgFgBgFIgBAAQgDAHgEAEIgHAGQgHAFgIADQgJADgMAAIgOgCgAAUAHIgDACIgIADIgIACIgNADQgFACgEACQgIAFgCAGQgDAHAAAGIABAJQABAGAFAFQACADAEACQAEACAFAAQAFAAAHgDQAFgEAGgHQAGgKADgNQADgMAAgLIAAgHIgDACg");
  this.shape_9.setTransform(213.275, 159.9458);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AhGBgIAAi/IBUAAQAKAAAKACQAJABAJAIQAIAIACAKQADAJAAAJQAAAJgDAIQgCAHgGAHQgFAGgFADQgFADgEABIAAABQAGABAFACIAKAHQAGAFAFAJQADAJABAOQgBAQgFAJQgEAKgGAFQgGAFgJAEQgLADgPAAgAgcBCIAaAAIAKgBQAGgCADgDQAEgBAEgGQACgEAAgJQABgIgDgGQgCgFgDgCQgGgEgHgCIgKgBIgZAAgAgcgSIAXAAIAJgBQAGgCAFgDQAEgEACgFIACgJQAAgGgCgFQgCgFgFgEIgHgCIgIgBIgbAAg");
  this.shape_10.setTransform(197.7, 160.1);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgpBdQgRgMgKgXQgGgOgDgOQgDgPAAgPQAAgOADgPQADgPAGgNQAKgWARgNQASgLAXAAQAYAAASALQARANAKAWQAGANADAPQADAPAAAOQAAAPgDAPQgDAOgGAOQgKAXgRAMQgSALgYAAQgXAAgSgLgAgQhCQgHAFgEALQgDAHgCAKIgDASIAAAPIAAAQIADASQACAKADAHQAEALAHAGQAHAFAJAAQAKAAAHgFQAHgGAEgLQADgHACgKIADgSIABgQIgBgPIgDgSQgCgKgDgHQgEgLgHgFQgHgGgKAAQgJAAgHAGg");
  this.shape_11.setTransform(180.875, 160.1);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AgWBmQgLgCgKgGQgNgJgIgQQgHgPgBgSIAnAAIADANQACAHADAFQAHAIAHACQAGACAFAAIAIgBQAFgBAGgEQAEgDAEgHQADgGAAgKQAAgFgCgGQgCgGgGgFQgFgDgGgBIgJgBIgQAAIAAgeIANAAIAHgBQAFgBAFgDQAGgFACgGQACgGAAgFQgBgIgCgGQgCgFgDgEQgEgEgFgBIgHgBQgGAAgGACQgGACgFAIQgDAGgBAHIAAAJIgpAAQAAgNAFgMQAEgNAIgIQALgMAOgEQAPgEALABQALgBAOAEQAOADAMALQAHAHAEALQAEALAAAMQAAAKgCAIQgDAHgGAHQgFAFgEACIgHACIAAACQAGAAAGACQAGADAGAHQAGAGACAIQACAHAAAJQAAANgDAKQgEAKgFAHQgFAGgFAEQgMAJgOACQgNADgMAAIgEAAIgSgCg");
  this.shape_12.setTransform(164.65, 160.1019);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgnBlQgIgBgHgEQgJgFgHgMQgHgMAAgUQAAgJACgJQACgJAFgHQAFgIAHgFIAPgGQAIgDALgCIAagFIAIgBQAFgCADgDIACgEIABgLQAAgIgCgHQgDgIgFgEQgFgEgEgBIgHgBQgLAAgGAFQgHAGgCAFIgDAJIgBALIgoAAQAAgKACgKQADgKAFgJQAIgMAKgGQALgHALgBQALgDAJABQAIgBANADQANACANAJQAMAKAEAOQAFANgBASIAABMIABAOIACAFQACAEACABIAHAAIAAAfIgJABIgMAAQgFABgGgCQgFgBgGgEQgDgDgDgFQgCgFgBgFIgBAAQgDAHgEAEIgHAGQgHAFgIADQgJADgMAAIgOgCgAAUAHIgDACIgIADIgIACIgNADQgFACgEACQgIAFgCAGQgDAHAAAGIABAJQABAGAFAFQACADAEACQAEACAFAAQAFAAAHgDQAFgEAGgHQAGgKADgNQADgMAAgLIAAgHIgDACg");
  this.shape_13.setTransform(149.325, 159.9458);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AhPCIIAAkHIAmAAIAAATIABAAIAHgJIAJgHQAFgEAJgDQAIgDAJAAQAOgBAMAGQANAGALANQALAOAFARQAFAQABANIACATIgCAWQgBALgEAMQgDANgGAKQgFAJgIAIQgJAIgLAFQgLAGgOAAQgHAAgHgCQgHgCgHgEIgJgJIgHgIIgBAAIAABYgAgRhiQgJAFgGAQQgFALgCANQgCANAAAKIABAQIADASQADALAFAJQAHAKAGAEQAHAEAHAAQAEAAAIgDQAHgEAHgKQAFgIADgNQAEgMAAgVQAAgLgBgMQgCgMgEgNQgHgQgJgFQgJgGgGABIgBgBQgGAAgIAGg");
  this.shape_14.setTransform(132.85, 163.2481);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AAACQQgOAAgLgEQgMgEgIgHQgIgGgFgGQgLgOgFgRQgFgRgBgRIgBggQAAgdACgTQACgUACgMQADgLACgGQAFgOAJgLQAKgLAOgHQAKgDAMgCIAYgEQANgCAFgEQAFgEAAgEIAeAAIgCAMIgDALQgGAOgLAGQgMAGgPACIgbAGQgMAEgKAIQgKAJgFAQIgDAOIgCANIAAALIACAAIAFgOQAEgIAFgGQAIgKALgGQALgFAOAAQAPAAAMAFQALAGAIAIQAJALAGANQAHAOACAOQADAPAAAPQAAASgFAUQgFATgLAQQgNAQgQAHQgOAHgQAAIgCAAgAgMgYQgIAFgGAMQgHAMgCANQgCAOAAALIACAXQACANAGANQAHANAIAEQAHAEAGAAQAGAAAIgFQAHgEAHgMQAGgNABgNQACgOAAgJIAAgQIgDgSQgCgJgEgIQgGgLgHgEQgHgFgHAAQgGAAgIAEg");
  this.shape_15.setTransform(114.825, 156.1017);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AgpBdQgRgMgKgXQgGgOgDgOQgDgPAAgPQAAgOADgPQADgPAGgNQAKgWARgNQASgLAXAAQAYAAASALQARANAKAWQAGANADAPQADAPAAAOQAAAPgDAPQgDAOgGAOQgKAXgRAMQgSALgYAAQgXAAgSgLgAgQhCQgHAFgEALQgDAHgCAKIgDASIAAAPIAAAQIADASQACAKADAHQAEALAHAGQAHAFAJAAQAKAAAHgFQAHgGAEgLQADgHACgKIADgSIABgQIgBgPIgDgSQgCgKgDgHQgEgLgHgFQgHgGgKAAQgJAAgHAGg");
  this.shape_16.setTransform(97.275, 160.1);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgpBdQgRgMgKgXQgGgOgDgOQgDgPAAgPQAAgOADgPQADgPAGgNQAKgWARgNQASgLAXAAQAYAAASALQARANAKAWQAGANADAPQADAPAAAOQAAAPgDAPQgDAOgGAOQgKAXgRAMQgSALgYAAQgXAAgSgLgAgQhCQgHAFgEALQgDAHgCAKIgDASIAAAPIAAAQIADASQACAKADAHQAEALAHAGQAHAFAJAAQAKAAAHgFQAHgGAEgLQADgHACgKIADgSIABgQIgBgPIgDgSQgCgKgDgHQgEgLgHgFQgHgGgKAAQgJAAgHAGg");
  this.shape_17.setTransform(80.325, 160.1);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgWBmQgLgCgKgGQgNgJgIgQQgIgPAAgSIAoAAIACANQACAHAEAFQAFAIAHACQAHACAFAAIAIgBQAFgBAGgEQAEgDAEgHQADgGAAgKQAAgFgCgGQgCgGgFgFQgFgDgGgBIgKgBIgPAAIAAgeIAMAAIAHgBQAFgBAFgDQAGgFACgGQACgGgBgFQAAgIgCgGQgCgFgEgEQgEgEgEgBIgHgBQgGAAgGACQgGACgFAIQgDAGgBAHIAAAJIgpAAQABgNAEgMQAEgNAIgIQALgMAOgEQAOgEAMABQALgBAOAEQAOADALALQAIAHAEALQAEALAAAMQABAKgDAIQgDAHgGAHQgFAFgDACIgIACIAAACQAGAAAGACQAFADAHAHQAGAGACAIQACAHAAAJQAAANgEAKQgDAKgFAHQgFAGgGAEQgMAJgNACQgNADgMAAIgEAAIgSgCg");
  this.shape_18.setTransform(64.1, 160.1019);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AgnBlQgIgBgHgEQgJgFgHgMQgHgMAAgUQAAgJACgJQACgJAFgHQAFgIAHgFIAPgGQAIgDALgCIAagFIAIgBQAFgCADgDIACgEIABgLQAAgIgCgHQgDgIgFgEQgFgEgEgBIgHgBQgLAAgGAFQgHAGgCAFIgDAJIgBALIgoAAQAAgKACgKQADgKAFgJQAIgMAKgGQALgHALgBQALgDAJABQAIgBANADQANACANAJQAMAKAEAOQAFANgBASIAABMIABAOIACAFQACAEACABIAHAAIAAAfIgJABIgMAAQgFABgGgCQgFgBgGgEQgDgDgDgFQgCgFgBgFIgBAAQgDAHgEAEIgHAGQgHAFgIADQgJADgMAAIgOgCgAAUAHIgDACIgIADIgIACIgNADQgFACgEACQgIAFgCAGQgDAHAAAGIABAJQABAGAFAFQACADAEACQAEACAFAAQAFAAAHgDQAFgEAGgHQAGgKADgNQADgMAAgLIAAgHIgDACg");
  this.shape_19.setTransform(48.775, 159.9458);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("Ag4BgIAAi/IBxAAIAAAeIhHAAIAAChg");
  this.shape_20.setTransform(35.9, 160.1);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AgUAdQADAAAEgCQAFgCAEgGQADgHAAgMIAAgDIgTAAIAAg0IAoAAIAAA1QABALgDAMQgCAMgLALQgFAEgGAEQgGACgIABg");
  this.shape_21.setTransform(218.7542, 132.9);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AAiBhIAAiKIg/CKIgtAAIAAjBIAqAAIAACKIA+iKIAtAAIAADBg");
  this.shape_22.setTransform(204.525, 122.8);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AAiBhIAAiKIg/CKIgtAAIAAjBIAqAAIAACKIA+iKIAtAAIAADBg");
  this.shape_23.setTransform(185.875, 122.8);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgUBhIAAihIgzAAIAAggICPAAIAAAgIgzAAIAAChg");
  this.shape_24.setTransform(169.725, 122.8);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AgpCEIgMgCIAAgfIAGABIAIABQAKAAAFgGQAFgGAEgMIAFgQIhHjBIAtAAIAqCMIACAAIAjiMIAnAAIg6DRIgGATQgDALgIAKQgHAJgJADQgIAEgMAAIgMgBg");
  this.shape_25.setTransform(155.05, 126.4);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AA6B5IAAgxIhzAAIAAAxIglAAIgDhRIAWAAIAHgQIAHgUQAHgZACgWQACgXAAgVIAAgiIB4AAIAAChIAcAAIgEBRgAgNhCIgBAZIgDAaQgCAOgFANIgKAcIA/AAIAAiBIgqAAg");
  this.shape_26.setTransform(137.875, 125.3);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AgWBmQgLgCgKgGQgNgJgIgQQgHgPgBgSIAnAAIADANQACAHAEAFQAFAIAHACQAHACAFAAIAIgBQAFgBAGgEQAEgDAEgHQADgGAAgKQAAgFgCgGQgBgGgHgFQgFgDgFgBIgKgBIgQAAIAAgeIANAAIAHgBQAFgBAFgDQAGgFACgGQACgGgBgFQAAgIgCgGQgCgFgDgEQgFgEgEgBIgHgBQgGAAgGACQgGACgFAIQgDAGgBAHIAAAJIgpAAQABgNAEgMQAEgNAIgIQALgMAOgEQAOgEAMABQALgBAOAEQAOADALALQAIAHAEALQAEALAAAMQABAKgDAIQgDAHgGAHQgFAFgEACIgHACIAAACQAGAAAGACQAFADAHAHQAGAGACAIQACAHAAAJQAAANgDAKQgEAKgFAHQgFAGgGAEQgLAJgOACQgNADgMAAIgEAAIgSgCg");
  this.shape_27.setTransform(120.45, 122.8019);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AhGBhIAAjBIBUAAQAKAAAKACQAJADAJAGQAIAJACAJQADALAAAHQAAAKgDAHQgCAJgGAGQgFAGgFADQgFADgEAAIAAACQAGABAFACIAKAHQAGAFAFAJQADAJAAAPQAAAPgFAKQgEAJgGAEQgGAGgJADQgLAFgPAAgAgcBBIAaAAIAKgBQAGgBADgCQAEgCAEgFQACgFAAgJQABgIgDgFQgCgFgDgDQgGgFgHgBIgKgBIgZAAgAgcgSIAXAAIAJgBQAGgCAFgDQAEgEACgFIACgKQAAgFgCgFQgCgFgFgEIgHgBIgIgBIgbAAg");
  this.shape_28.setTransform(104.55, 122.8);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AAiBhIAAiKIg/CKIgtAAIAAjBIAqAAIAACKIA+iKIAtAAIAADBg");
  this.shape_29.setTransform(78.325, 122.8);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AhQCIIAAkHIAoAAIAAATIABAAIAGgJIAIgHQAHgEAIgDQAIgDAJAAQAOgBANAGQAMAGALANQALAOAFARQAFAQABANIABATIgBAWQgCALgDAMQgEANgFAKQgFAJgIAIQgIAIgLAFQgMAGgOAAQgHAAgHgCQgIgCgFgEIgKgJIgHgIIgBAAIAABYgAgShiQgIAFgGAQQgGALgBANQgCANABAKIAAAQIADASQADALAFAJQAGAKAHAEQAHAEAHAAQAFAAAGgDQAIgEAHgKQAFgIAEgNQADgMAAgVQABgLgCgMQgBgMgGgNQgGgQgIgFQgJgGgHABIgBgBQgGAAgJAGg");
  this.shape_30.setTransform(60.1, 125.9481);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AArCFIAAjhIhUAAIAADhIgtAAIAAkJICtAAIAAEJg");
  this.shape_31.setTransform(39.3, 119.15);
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
 }).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(26, 95, 366, 124.9), null);
 (lib.t1_t1_office = function() {
  this.initialize(img.t1_t1_office);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 243, 86);
 (lib.t1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_t1 = new lib.t1_t1_office();
  this.cvr_t1.name = "cvr_t1";
  this.cvr_t1.parent = this;
  this.cvr_t1.setTransform(27, 121, 0.5, 0.5);
  this.timeline.addTween(cjs.Tween.get(this.cvr_t1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.cvr_t1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(25, 119, 247, 94), null);
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
  this.shape.graphics.f("#0C593C").s().p("AAAAJIgJAQIgHgGIAKgPIgOgFIABgJIAQAFIAAgTIAIAAIAAATIAOgFIADAJIgPAFIAJAPIgHAGg");
  this.shape.setTransform(106, 45.6);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgNBUIAAghIAcAAIAAAhgAgHAfIgGg4IAAg6IAcAAIAAA6IgHA4g");
  this.shape_1.setTransform(98.8, 54);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AAjBUIgKgjIgxAAIgKAjIgdAAIAzinIAaAAIAyCngAATAXIgThHIgRBHIAkAAg");
  this.shape_2.setTransform(89.825, 54);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AAXBUIgyhUIAABUIgdAAIAAinIAdAAIAABIIAvhIIAgAAIg1BOIA6BZg");
  this.shape_3.setTransform(78.7, 54);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AAbBUIAAhMIg1AAIAABMIgcAAIAAinIAcAAIAABDIA1AAIAAhDIAcAAIAACng");
  this.shape_4.setTransform(64.975, 54);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AAcBUIAAh6Ig4B6IgcAAIAAinIAdAAIAAB6IA4h6IAcAAIAACng");
  this.shape_5.setTransform(51.25, 54);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BUIAAinIA/AAQAHAAAJACQAIACAHAIQAHAHACAIQACAIAAAHQAAAHgCAHQgCAHgGAHIgFAFIgIADIAAABIAJADIAIAFQAEAEAEAIQADAIAAANQABAIgDAJQgCAKgJAJQgGAFgGADQgHACgGABIgLAAgAgaA7IAaAAIALgBQAFgBAEgEQAEgEABgFIABgKIgBgJQgBgFgEgEQgEgEgFgBQgFgCgGABIgaAAgAgagOIAaAAIAHgBQAFgBAEgEIADgGQACgDAAgGIgBgIQgBgFgDgDQgDgEgFgBQgEgCgFAAIgZAAg");
  this.shape_6.setTransform(38.0042, 53.9958);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAABZQgJAAgKgDQgLgDgKgIQgOgNgGgUQgGgTAAgXQAAgWAGgTQAGgUAOgNQAKgIALgDQAKgDAJAAQAKAAAKADQALADAKAIQAOANAGAUQAGATAAAWQAAAXgGATQgGAUgOANQgKAIgLADQgIADgJAAIgDAAgAAMA9QAGgCAGgHQAFgHADgIQADgJABgKIABgSIgBgRQgBgKgDgJQgDgIgFgHQgGgHgGgCQgGgDgGAAQgEAAgGADQgHACgGAHQgFAHgDAIQgDAJgBAKIgBARIABASQABAKADAJQADAIAFAHQAGAHAHACQAGADAEAAQAGAAAGgDg");
  this.shape_7.setTransform(24.075, 54);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAbBUIAAhMIg1AAIAABMIgcAAIAAinIAcAAIAABDIA1AAIAAhDIAcAAIAACng");
  this.shape_8.setTransform(10.175, 54);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#E07E22").s().p("AlvFvQiYiXAAjYQAAjXCYiYQCZiYDWAAQDXAACZCYQCYCYAADXQAADYiYCXQiZCZjXAAQjWAAiZiZg");
  this.shape_9.setTransform(52, 52);
  this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));
 }).prototype = getMCSymbolPrototype(lib.orange, new cjs.Rectangle(0, 0, 115.6, 104), null);
 (lib.logo = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgjAxIAShhIA1AAIgCAPIgkAAIgFAZIAiAAIgDANIgiAAIgFAdIAmAAIgDAPg");
  this.shape.setTransform(249.1144, 66.578, 0.9242, 0.9233);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgZAxIAQhSIgbAAIADgPIBGAAIgDAPIgbAAIgPBSg");
  this.shape_1.setTransform(242.4832, 66.578, 0.9242, 0.9233);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#FFFFFF").s().p("AglAxIAShfQAIgCAPAAQAQAAAJAGQAJAIAAAMQAAARgNAIQgLAJgSAAIgJAAIgHAlgAgFgiIgGAhIAJABQAKAAAGgGQAHgGAAgIQAAgPgRAAg");
  this.shape_2.setTransform(234.2346, 66.5549, 0.9242, 0.9233);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgjAmQgJgLAAgRQAAgbARgSQAPgOATAAQATAAAKAMQAJAKAAASQAAAcgRARQgNAOgVAAQgSAAgLgMgAgRgUQgJAOAAAPQAAAbAWAAIABAAQAMAAAKgPQAJgOAAgPQAAgbgXAAQgNAAgJAPg");
  this.shape_3.setTransform(225.547, 66.578, 0.9242, 0.9233);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#FFFFFF").s().p("AgRA1IABgJQgNgDgIgJQgLgKABgQQAAgYAQgOQAOgMARAAIACgIIAQAAIgCAJQAOACAJAJQAJAKABARQAAAXgQAOQgNAMgUAAIgBAJgAACAgQANgBAIgKQAJgLAAgQQAAgWgSgDgAgVgVQgJALAAAPQAAALAEAHQAGAHAHABIAMg/QgLABgJAKg");
  this.shape_4.setTransform(215.45, 66.578, 0.9242, 0.9233);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#005942").s().p("AhzBhQgggkAOg9QAPg5AtglQAugkA6AAQA4AAAdAiQAgAlgOA7QgQA/gyAkQgtAfg2AAQg3AAgdghgAgkg2QgXAXgIAiQgKAoATAXQAOAQAXAAQAdAAAZgYQAagZAJgjQAEgRgCgQQgCgUgKgMQgMgNgXAAQgiAAgZAag");
  this.shape_5.setTransform(90.3814, 44.1658, 0.9242, 0.9233);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#80BC1E").s().p("AguA0QgPgRAIgjQACAZAOAJQAOAJASgIQAsgVALhLQAHAKAAATQAAAKgDAMIgCAIQgFAMgGAKQgLATgRAMQgPALgSAAQgRAAgJgKg");
  this.shape_6.setTransform(90.3452, 44.7197, 0.9242, 0.9233);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#80BC1E").s().p("AhNBxQgZgVAAgnIAAgJIA3AAIAAAEQAAATAMAKQALALAUgBQASAAALgKQAMgLABgWQAAgHgEgGQgDgGgFgCIgMgEQgGgCgIAAIgSAAIAIgpIALAAIAPgDQAJgBAGgEQAGgEAEgHQAFgIAAgKQAAgZggAAQgPAAgMAIQgLAHgFAVIg3AAQAEgYAJgQQAJgQAOgJQAPgKASgEQASgFAVABQAWgBAPAGQAOAEAKAKQAKAJAEAMQAEAKAAAQQAAAKgDAJQgEALgFAHQgEAGgJAHQgIAGgHACQAPACAKAOQAKAOAAAVQAAAXgHARQgJARgOAMQgOALgUAHQgTAFgXAAQgtAAgYgVg");
  this.shape_7.setTransform(244.424, 44.0734, 0.9242, 0.9233);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#80BC1E").s().p("AhGCBQgNgFgJgKQgJgIgEgNQgEgKAAgPQAAgmAVgWQAWgUAngHIAkgEQAPgBALgEQALgDAEgGQAFgGAAgNQAAgKgEgFQgEgHgFgDQgGgDgGgBIgNgBQgPgBgMAKQgNAIgDAUIg4AAQADgZAKgPQAJgPAOgLQAQgLAQgDQAQgFASABQANAAASACQAOACAPAIQAOAHAIANQAJAOgBAVQAAARgEAaIgUBlIgCAjQAAAHACAIIg8AAIAAgZQgMAQgRAIQgRAHgTAAQgRABgOgGgAATAPIgZACIgRAEQgJADgFAEQgFADgEAJQgEAHAAAMQAAAPAKAGQAKAIAMAAQAOAAAJgFQAJgGAHgIQAEgFAGgNQAEgLACgKIAGgZQgMAJgMABg");
  this.shape_8.setTransform(223.0101, 44.0734, 0.9242, 0.9233);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#80BC1E").s().p("AhnCAIAvj/ICgAAIgKA1IhkAAIglDKg");
  this.shape_9.setTransform(204.2902, 44.0965, 0.9242, 0.9233);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#005942").s().p("AgrB8QgUgIgPgTQgPgSgGgYQgIgZAAgdQAAgdAIgYQAHgZAPgRQAPgSAUgLQAUgLAYABQAagBAUAMQAUALANATQAOAVAGAXQAHAZAAAbIgBANIibAAQABAiANAQQAOAPAZAAQARAAANgLQAOgKADgMIA0AAQgNAugaATQgaAVglgBQgYAAgVgKgAgXhLQgJAHgFAHQgGAJgCAJQgCAGgBALIBgAAQgEgcgLgNQgLgOgWAAQgNAAgKAGg");
  this.shape_10.setTransform(182.8254, 44.0734, 0.9242, 0.9233);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#005942").s().p("AhXCBIgagEIAAg2IAJACIAKAAQAOAAAHgPIADgKIADgaQACgWAAggQABgYAAhJICyAAIAAD/Ig7AAIAAjKIg9AAIgBBDIgDAxQgCASgDASQgFAQgEAHQgHAOgNAIQgOAJgUAAg");
  this.shape_11.setTransform(158.2184, 44.2812, 0.9242, 0.9233);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#005942").s().p("AAuCAIAAisIhRCsIhDAAIAAj/IA5AAIAACsIBRisIBDAAIAAD/g");
  this.shape_12.setTransform(134.9283, 44.0965, 0.9242, 0.9233);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#005942").s().p("AgdCAIAAjKIhHAAIAAg1IDJAAIAAA1IhHAAIAADKg");
  this.shape_13.setTransform(112.6779, 44.0965, 0.9242, 0.9233);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#005942").s().p("ABkCwIAAj5IgBAAIhJD5IgzAAIhJj2IgBAAIAAD2Ig+AAIAAlgIBdAAIBFDyIABAAIBDjyIBdAAIAAFgg");
  this.shape_14.setTransform(60.876, 39.5956, 0.9242, 0.9233);
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
  this.shape_15.graphics.lf(["#FFFFFF", "#F27E20"], [0.612, 0.765], -150, 0, 150, 0).s().p("A3bBNIAAiaMAu3AAAIAACag");
  this.shape_15.setTransform(150, 67.25);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#FFFFFF").s().p("A3bEpIAApSMAu3AAAIAAJSg");
  this.shape_16.setTransform(150, 29.75);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
    t: this.shape_16
   }, {
    t: this.shape_15
   }]
  }).wait(1));
 }).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0, 0, 300, 75), null);
 (lib.l4 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape.setTransform(277.15, 68.725);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_1.setTransform(273.75, 66.1);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_2.setTransform(268.85, 66.0781);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_3.setTransform(264.525, 66.1);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgDIABgFIAAAAIgBAEIAAADIgBABIgUAwIgLAAIAAg/IAJAAIAAAwIgBADIAAADIAAACIAAgCIABgDIABgDIAUgwIALAAIAAA/g");
  this.shape_4.setTransform(259.475, 66.1);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgEAgIAAg4IgQAAIAAgHIApAAIAAAHIgRAAIAAA4g");
  this.shape_5.setTransform(255.1, 66.1);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_6.setTransform(251.075, 66.0781);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AAUAgIAAg4IgBAAIgQA4IgFAAIgQg4IgBAAIAAA4IgIAAIAAg/IAOAAIALApIACAGIAAAHIABgGIABgHIAMgpIAOAAIAAA/g");
  this.shape_7.setTransform(245.7, 66.1);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgDIABgFIAAAAIgBAEIAAADIgBABIgUAwIgLAAIAAg/IAJAAIAAAwIgBADIAAADIAAACIAAgCIABgDIABgDIAUgwIALAAIAAA/g");
  this.shape_8.setTransform(239.975, 66.1);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_9.setTransform(235.375, 66.075);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgcAEIAAgHIA5AAIAAAHg");
  this.shape_10.setTransform(228.725, 66.375);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAFAAADgDQADgDACgGIAAgNQAAgJgBgGQgBgGgEgCQgDgDgEAAQgEAAgDADg");
  this.shape_11.setTransform(221.85, 66.0781);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFACQAGAAADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgEQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_12.setTransform(217.275, 66.1);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgEAgIAAg4IgRAAIAAgHIAqAAIAAAHIgRAAIAAA4g");
  this.shape_13.setTransform(213.05, 66.1);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_14.setTransform(209.125, 66.075);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_15.setTransform(204.725, 66.0781);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAeApIAAgSIhDAAIAAg/IAJAAIAAA4IAWAAIAAg4IAIAAIAAA4IAUAAIAAg4IAJAAIAAA4IAHAAIAAAZg");
  this.shape_16.setTransform(199, 66.975);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_17.setTransform(192.675, 66.0781);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFACQAGAAADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgEQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_18.setTransform(188.375, 66.1);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_19.setTransform(181.825, 66.0781);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_20.setTransform(177.475, 66.0781);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AAdApIAAgSIhBAAIAAg/IAJAAIAAA4IAUAAIAAg4IAIAAIAAA4IAVAAIAAg4IAJAAIAAA4IAHAAIAAAZg");
  this.shape_21.setTransform(171.75, 66.975);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AgBAfQgFgDgDgHQgDgHAAgMIgLAAIAAAeIgJAAIAAg/IAJAAIAAAbIALAAQAAgJACgGQADgHAFgDQAEgDAIgBQAIABAFADQAFAEADAHQACAHAAAKQAAANgDAIQgDAIgEADQgGADgHAAIgCAAQgFAAgEgDgAADgWQgDACgBAGQgBAGAAAJIAAANQACAGACADQADADAFAAQAFAAADgDQAEgDABgGIABgNQgBgJgBgGQgBgGgEgCQgCgDgFAAQgEAAgDADg");
  this.shape_22.setTransform(164.15, 66.0786);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AgVAqIAAgIIADABIAEAAQAEAAADgDIAEgKIgUhAIAJAAIAOAyIAPgyIAJAAIgUBAIgEAKQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_23.setTransform(158.425, 67.2);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFACQAGAAADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgEQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_24.setTransform(154.125, 66.1);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AgDAgIAAg4IgRAAIAAgHIApAAIAAAHIgQAAIAAA4g");
  this.shape_25.setTransform(149.9, 66.1);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_26.setTransform(145.975, 66.075);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AAMAqIAAgvIAAgEIABgEIAAAAIgBADIAAADIgBACIgUAvIgLAAIAAg+IAJAAIAAAvIgBAEIAAADIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA+gAgJgeQgEgEAAgHIAEAAQABAEADACQACACADgBQAEABADgCQACgCABgEIAFAAQgBAHgEAEQgEADgGAAQgFAAgEgDg");
  this.shape_27.setTransform(141.225, 65.05);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_28.setTransform(136.525, 66.0781);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AAZA1IAAgUIgxAAIAAAUIgJAAIAAgcIAGAAQAEgHACgIIADgRIAAgXIAAgWIAtAAIAABNIAHAAIAAAcgAgIgVQAAAPgCALQgCALgFAJIAiAAIAAhFIgZAAg");
  this.shape_29.setTransform(131.175, 65.975);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape_30.setTransform(123, 68.725);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_31.setTransform(119.225, 66.125);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#0C593C").s().p("AgVAqIAAgIIADABIAEAAQAEAAADgDQACgEACgGIgUhAIAJAAIAOAyIAPgyIAJAAIgUBAIgEAKQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_32.setTransform(115.075, 67.2);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_33.setTransform(110.825, 66.075);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#0C593C").s().p("AALAgIAAg4IgWAAIAAA4IgJAAIAAg/IApAAIAAA/g");
  this.shape_34.setTransform(106.2, 66.1);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQAAgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgBAEgEADQgDADgEAAQgJAAgEgFgAABABIgGADQgDACgCADQgBACgBAFQAAAEACADQACADAFAAQADAAADgCIADgFIABgGIAAgPIgGADg");
  this.shape_35.setTransform(101.7, 66.075);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_36.setTransform(97.575, 66.1);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_37.setTransform(90.875, 66.0781);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#0C593C").s().p("AAUAgIAAg4IgBAAIgQA4IgFAAIgQg4IgBAAIAAA4IgIAAIAAg/IAOAAIALApIACAGIAAAHIABgGIABgHIAMgpIAOAAIAAA/g");
  this.shape_38.setTransform(85.5, 66.1);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_39.setTransform(80.005, 67.125);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgEgDgEAAQgEAAgDADg");
  this.shape_40.setTransform(75, 66.0781);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#0C593C").s().p("AgEA2IAAgcIgFAGQgDACgFAAQgJAAgEgFQgFgFgBgIQgCgIAAgIQAAgJACgHQACgIAFgEQAEgEAIgBQAEAAAEADQADACACAEIAAgdIAJAAIAAAdQACgEADgCQAEgDAEAAQAIABAEAEQAFAEACAIQACAHAAAJQAAAIgCAIQgCAIgEAFQgFAFgIAAQgFAAgDgCIgFgGIAAAcgAAKgWIgEAGIgBAIIAAAIQgBAGABAGQABAGADAEQACAEAGAAQAHAAADgHQACgHAAgMIAAgHQAAgFgCgEQgBgEgCgCQgDgDgEAAQgEAAgDADgAgXgWQgCACgBAEQgCAEAAAEIAAAIIAAAMQABAGADAEQACAEAGAAQAHAAADgHQADgHgBgMIAAgHIgBgJQgCgEgCgCQgDgDgEAAQgEAAgDADg");
  this.shape_41.setTransform(68.525, 66.075);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFACQAGAAADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgEQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_42.setTransform(60.375, 66.1);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_43.setTransform(53.825, 66.0781);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_44.setTransform(49.775, 66.1);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_45.setTransform(44.85, 66.1);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#0C593C").s().p("AAVAgIAAg/IAJAAIAAA/gAgdAgIAAg/IAJAAIAAAaIAOAAQAEAAAEADQAEACACAEQACAEAAAGQAAAIgFAFQgFAFgGAAgAgUAZIAKAAQAGAAADgEQABgCAAgGQAAgFgBgDQgDgDgGAAIgKAAg");
  this.shape_46.setTransform(39.05, 66.1);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_47.setTransform(33.405, 67.125);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgBADgBAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_48.setTransform(26.8, 66.075);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAaIAWAAIAAgaIAKAAIAAA/g");
  this.shape_49.setTransform(22.15, 66.1);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#0C593C").s().p("AAPAgIgPgaIgOAaIgKAAIAUggIgSgfIAJAAIAOAYIANgYIAKAAIgTAfIAUAgg");
  this.shape_50.setTransform(286.025, 54.15);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#0C593C").s().p("AAVAgIAAg/IAIAAIAAA/gAgdAgIAAg/IAJAAIAAAbIAOAAQAFAAADACQADACADAEQACAEAAAGQAAAIgFAFQgFAFgGAAgAgUAZIAKAAQAGAAADgDQABgDABgFQgBgGgBgDQgCgDgGAAIgLAAg");
  this.shape_51.setTransform(280.55, 54.15);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_52.setTransform(274.8, 54.15);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_53.setTransform(269.95, 54.15);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_54.setTransform(265.325, 54.1281);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_55.setTransform(260.375, 54.175);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFABQAGABADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgDQADgDgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgEIAKAAQAEAAADgDQACgCAAgGQAAgEgCgCQgDgDgEAAIgKAAg");
  this.shape_56.setTransform(256.125, 54.15);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgIAAQAAgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADABAFIAAAlIAAADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIAEgFIAAgGIAAgPIgHADg");
  this.shape_57.setTransform(251.7, 54.125);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#0C593C").s().p("AgEAgIAAg4IgRAAIAAgHIArAAIAAAHIgSAAIAAA4g");
  this.shape_58.setTransform(247.6, 54.15);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_59.setTransform(243.675, 54.125);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#0C593C").s().p("AATApIAAgSIglAAIAAASIgIAAIAAgZIAFAAIAFgLIADgKIAAgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_60.setTransform(238.95, 55.025);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_61.setTransform(234.275, 54.1281);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_62.setTransform(229.805, 55.175);
  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#0C593C").s().p("AALAgIAAg4IgVAAIAAA4IgJAAIAAg/IAnAAIAAA/g");
  this.shape_63.setTransform(224.85, 54.15);
  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#0C593C").s().p("AgEAJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIABgEIAAgEIgEAAIAAgLIAJAAIAAANQAAAEgCAEQgDAEgEACg");
  this.shape_64.setTransform(219.4, 57.625);
  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFABQAGABADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgDQADgDgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgEIAKAAQAEAAADgDQACgCAAgGQAAgEgCgCQgDgDgEAAIgKAAg");
  this.shape_65.setTransform(216.275, 54.15);
  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#0C593C").s().p("AgEAgIAAg4IgRAAIAAgHIAqAAIAAAHIgRAAIAAA4g");
  this.shape_66.setTransform(212.05, 54.15);
  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_67.setTransform(208.125, 54.125);
  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#0C593C").s().p("AATApIAAgSIglAAIAAASIgIAAIAAgZIAFAAIAFgLIADgKIAAgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_68.setTransform(203.4, 55.025);
  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_69.setTransform(198.725, 54.1281);
  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_70.setTransform(194.255, 55.175);
  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_71.setTransform(189.625, 54.125);
  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#0C593C").s().p("AAPAgIgPgaIgOAaIgKAAIAUggIgSgfIAJAAIAOAYIANgYIAKAAIgTAfIAUAgg");
  this.shape_72.setTransform(183.275, 54.15);
  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#0C593C").s().p("AAUAgIAAg/IAJAAIAAA/gAgcAgIAAg/IAJAAIAAAbIAMAAQAGAAACACQAFACACAEQACAEAAAGQAAAIgFAFQgFAFgHAAgAgTAZIAJAAQAHAAACgDQACgDgBgFQABgGgCgDQgDgDgFAAIgKAAg");
  this.shape_73.setTransform(177.8, 54.15);
  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_74.setTransform(172.05, 54.15);
  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgKAAIAAg/IAKAAIAAAbIAVAAIAAgbIAKAAIAAA/g");
  this.shape_75.setTransform(167.2, 54.15);
  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgEgDgEAAQgEAAgDADg");
  this.shape_76.setTransform(162.3, 54.1281);
  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#0C593C").s().p("AgQAgIAAg/IAhAAIAAAHIgYAAIAAA4g");
  this.shape_77.setTransform(158.425, 54.15);
  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIAAANQACAGADADQADADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgBgGgEgCQgDgDgEAAQgEAAgDADg");
  this.shape_78.setTransform(153.9, 54.1281);
  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_79.setTransform(149.155, 55.175);
  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#0C593C").s().p("AgEAgIAAg4IgRAAIAAgHIAqAAIAAAHIgRAAIAAA4g");
  this.shape_80.setTransform(144.75, 54.15);
  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_81.setTransform(140.725, 54.1281);
  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFABQAGABADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgDQADgDgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgEIAKAAQAEAAADgDQACgCAAgGQAAgEgCgCQgDgDgEAAIgKAAg");
  this.shape_82.setTransform(136.425, 54.15);
  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f("#0C593C").s().p("AgDAgIAAg4IgRAAIAAgHIAqAAIAAAHIgRAAIAAA4g");
  this.shape_83.setTransform(130.2, 54.15);
  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_84.setTransform(125.9, 54.1281);
  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_85.setTransform(119.275, 54.1281);
  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgDIABgFIAAAAIgBAEIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAEIAAADIAAACIAAgCIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_86.setTransform(114.575, 54.15);
  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f("#0C593C").s().p("AALAgIAAgeIgHABIgHABQgFgBgEgCQgDgCgCgDQgBgDgBgFIAAgTIAJAAIAAASQAAAFACACQADADAFAAIAGAAIAFgBIAAgbIAJAAIAAA/g");
  this.shape_87.setTransform(109.7, 54.15);
  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgDIABgFIAAAAIgBAEIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAEIAAADIAAACIAAgCIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_88.setTransform(105.075, 54.15);
  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_89.setTransform(99.775, 54.175);
  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f("#0C593C").s().p("AgEAgIAAg4IgQAAIAAgHIApAAIAAAHIgRAAIAAA4g");
  this.shape_90.setTransform(95.8, 54.15);
  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_91.setTransform(91.5, 54.1281);
  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACADAAAFQAAAGgDAEQgCAEgFABQAGABADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgDQADgDgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgEIAKAAQAEAAADgDQACgCAAgGQAAgEgCgCQgDgDgEAAIgKAAg");
  this.shape_92.setTransform(84.925, 54.15);
  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f("#0C593C").s().p("AgEAJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIABgEIAAgEIgEAAIAAgLIAJAAIAAANQAAAEgCAEQgDAEgEACg");
  this.shape_93.setTransform(79.55, 57.625);
  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f("#0C593C").s().p("AgNAoQgFgDgDgIQgDgGAAgIIgBgPIABgQQABgHADgGQACgHAGgEQAFgEAJAAQAHAAAGADQAGAEACAGQADAGAAAIIgJAAQAAgFgCgEQgBgEgEgDQgDgDgGABQgGAAgDADQgDAEgCAFQgCAHAAAFIAAALIAAAMIACAMQACAGAEADQADADAFABQAGgBADgDQAEgDAAgFIADgNIAJAAQgBAKgCAHQgCAIgFAEQgFAEgJAAQgJAAgGgFg");
  this.shape_94.setTransform(75.8, 53.05);
  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f("#0C593C").s().p("AgbAsIgDgBIAAgIIACAAIACAAQAEAAACgEQACgFABgJIAAgWIAAgmIAwAAIAABWIgKAAIAAhNIgcAAIAAAiIAAAOIgCAPQgCAGgDAFQgEAEgGAAIgDAAg");
  this.shape_95.setTransform(69.475, 53.075);
  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f("#0C593C").s().p("AgYArIAAhVIAYAAQAHAAAGACQAFADAEAFQADAGAAAIQAAAKgEAGQgDAEgHADQgGACgHAAIgNAAIAAAkgAgPgBIAKAAQAFAAAGgBQAEgBACgEQADgEAAgHQAAgGgCgDQgCgEgEgBQgFgCgEAAIgNAAg");
  this.shape_96.setTransform(63.95, 53.025);
  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f("#0C593C").s().p("AgTArIAAhVIAnAAIAAAIIgeAAIAABNg");
  this.shape_97.setTransform(59.275, 53.025);
  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f("#0C593C").s().p("AATAgIAAg4IAAAAIgQA4IgFAAIgQg4IAAAAIAAA4IgJAAIAAg/IAOAAIAMApIABAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_98.setTransform(51.6, 54.15);
  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f("#0C593C").s().p("AAUAgIAAg/IAJAAIAAA/gAgcAgIAAg/IAJAAIAAAbIAMAAQAGAAACACQAFACACAEQACAEAAAGQAAAIgFAFQgFAFgHAAgAgTAZIAJAAQAHAAACgDQACgDgBgFQABgGgCgDQgDgDgFAAIgKAAg");
  this.shape_99.setTransform(45.05, 54.15);
  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_100.setTransform(39.3, 54.15);
  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_101.setTransform(34.45, 54.15);
  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgCADAAAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIAEgFIAAgGIAAgPIgHADg");
  this.shape_102.setTransform(29.95, 54.125);
  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f("#0C593C").s().p("AATApIAAgSIglAAIAAASIgIAAIAAgZIAFAAIAFgLIADgKIAAgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_103.setTransform(25.2, 55.025);
  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_104.setTransform(18.25, 54.1281);
  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f("#0C593C").s().p("AAQArIAAhNIggAAIAABNIgJAAIAAhVIAzAAIAABVg");
  this.shape_105.setTransform(12.75, 53.025);
  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape_106.setTransform(293.3, 44.825);
  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_107.setTransform(290.125, 42.1781);
  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#0C593C").s().p("AgDAgIAAg3IgSAAIAAgIIArAAIAAAIIgRAAIAAA3g");
  this.shape_108.setTransform(286.1, 42.2);
  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_109.setTransform(281.955, 43.225);
  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_110.setTransform(276.95, 42.1781);
  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#0C593C").s().p("AgEArIAAgKIgCAAQgIAAgHgEQgHgDgFgIQgEgHAAgLQAAgJADgGQACgGAFgEQAEgEAFgCQAGgCAGAAIACAAIAAgJIAJAAIAAAJIACAAQAGAAAGACQAFACAFAEQAEAEADAGQACAGAAAJQAAALgEAHQgEAIgHADQgHAEgJAAIgCAAIAAAKgAAFAYIACAAQAGAAAFgDQAFgCADgGQACgGAAgHQAAgJgCgFQgDgFgFgDQgFgDgGAAIgCAAgAgRgWQgFADgCAFQgDAFAAAJQAAAHADAGQACAGAFACQAFADAGAAIACAAIAAgxIgCAAQgGAAgFADg");
  this.shape_111.setTransform(270.525, 41.075);
  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_112.setTransform(262.325, 42.1771);
  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQAAgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgBAEgEADQgDADgEAAQgJAAgEgFgAABABIgGADQgDACgCADQgBACgBAFQAAAEACADQACADAFAAQADAAADgCQADgCAAgDIABgGIAAgPIgGADg");
  this.shape_113.setTransform(258.3, 42.175);
  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f("#0C593C").s().p("AgQAgIAAg/IAhAAIAAAIIgYAAIAAA3g");
  this.shape_114.setTransform(254.625, 42.2);
  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_115.setTransform(250.375, 42.1781);
  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_116.setTransform(245.425, 42.225);
  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_117.setTransform(240.775, 42.2);
  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f("#0C593C").s().p("AgDAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_118.setTransform(236.4, 42.2);
  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIAAANQACAGACADQADADAFAAQAGAAACgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_119.setTransform(232.1, 42.1781);
  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f("#0C593C").s().p("AAaArIAAhGIAAgGIABgFIgBAAIgBAGIgBAGIgSBFIgLAAIgShGIgBgFIgCgGIAAAGIAAAFIAABGIgJAAIAAhVIARAAIARBCIABAGIAAAHIAAAAIAAgGIACgHIARhCIARAAIAABVg");
  this.shape_120.setTransform(225.6, 41.075);
  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAEgBIADgCIADgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFQgBgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgIAAQAAgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIAEgFIABgGIAAgPIgIADg");
  this.shape_121.setTransform(217.5, 42.175);
  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f("#0C593C").s().p("AgEAgIAAg3IgRAAIAAgIIArAAIAAAIIgSAAIAAA3g");
  this.shape_122.setTransform(213.4, 42.2);
  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgCADAAAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_123.setTransform(209.5, 42.175);
  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_124.setTransform(204.955, 43.225);
  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgCADQgDADAAAFIgIAAQAAgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIACADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgGQgDAEgDADQgDADgEAAQgJAAgEgFgAABABIgGADQgDACgCADQgBACgBAFQAAAEACADQACADAFAAQADAAADgCQADgCAAgDIABgGIAAgPIgGADg");
  this.shape_125.setTransform(200.35, 42.175);
  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f("#0C593C").s().p("AALAgIAAg3IgVAAIAAA3IgJAAIAAg/IAnAAIAAA/g");
  this.shape_126.setTransform(195.7, 42.2);
  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_127.setTransform(191.075, 42.1781);
  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_128.setTransform(186.605, 43.225);
  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f("#0C593C").s().p("AALAgIAAg3IgVAAIAAA3IgJAAIAAg/IAnAAIAAA/g");
  this.shape_129.setTransform(181.65, 42.2);
  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f("#0C593C").s().p("AAAAfQgGgDgDgHQgDgHAAgMIgLAAIAAAeIgJAAIAAg/IAJAAIAAAbIALAAQAAgJADgGQACgHAGgDQADgDAIgBQAIABAFADQAFAEACAHQADAHAAAKQAAANgDAIQgCAIgFADQgGADgHAAIgCAAQgFAAgDgDgAACgWQgCACgBAGQgBAGAAAJIABANQABAGACADQACADAGAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgBgGgDgCQgDgDgFAAQgEAAgEADg");
  this.shape_130.setTransform(173.75, 42.1786);
  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_131.setTransform(167.525, 42.2);
  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_132.setTransform(162.6, 42.2);
  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_133.setTransform(157.975, 42.1781);
  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_134.setTransform(153.4, 42.2);
  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_135.setTransform(148.775, 42.1781);
  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f("#0C593C").s().p("AATAgIAAg3IAAAAIgQA3IgFAAIgQg3IAAAAIAAA3IgJAAIAAg/IAOAAIAMApIABAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_136.setTransform(143.4, 42.2);
  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_137.setTransform(137.675, 42.2);
  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_138.setTransform(132.855, 43.225);
  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f("#0C593C").s().p("AALAgIAAg3IgWAAIAAA3IgJAAIAAg/IApAAIAAA/g");
  this.shape_139.setTransform(127.9, 42.2);
  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f("#0C593C").s().p("AgVAqIAAgJIADACIAEAAQAEAAADgEQACgDACgGIgUhAIAJAAIAOAyIAPgyIAJAAIgUBAIgEAKQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_140.setTransform(121.425, 43.3);
  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f("#0C593C").s().p("AATAgIAAg3IAAAAIgQA3IgFAAIgQg3IAAAAIAAA3IgJAAIAAg/IAOAAIAMApIABAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_141.setTransform(116.05, 42.2);
  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_142.setTransform(110.4, 42.1781);
  this.shape_143 = new cjs.Shape();
  this.shape_143.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_143.setTransform(106.075, 42.2);
  this.shape_144 = new cjs.Shape();
  this.shape_144.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_144.setTransform(101.475, 42.175);
  this.shape_145 = new cjs.Shape();
  this.shape_145.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_145.setTransform(96.85, 42.2);
  this.shape_146 = new cjs.Shape();
  this.shape_146.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_146.setTransform(91.875, 42.2);
  this.shape_147 = new cjs.Shape();
  this.shape_147.graphics.f("#0C593C").s().p("AAPApIAAgSIglAAIAAg/IAJAAIAAA4IAVAAIAAg4IAJAAIAAA4IAGAAIAAAZg");
  this.shape_147.setTransform(87.2, 43.075);
  this.shape_148 = new cjs.Shape();
  this.shape_148.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_148.setTransform(81.925, 42.2);
  this.shape_149 = new cjs.Shape();
  this.shape_149.graphics.f("#0C593C").s().p("AASApIAAgSIgjAAIAAASIgJAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_149.setTransform(76.9, 43.075);
  this.shape_150 = new cjs.Shape();
  this.shape_150.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_150.setTransform(72.225, 42.1781);
  this.shape_151 = new cjs.Shape();
  this.shape_151.graphics.f("#0C593C").s().p("AATAgIAAg3IAAAAIgQA3IgFAAIgQg3IgBAAIAAA3IgIAAIAAg/IAOAAIALApIACAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_151.setTransform(66.85, 42.2);
  this.shape_152 = new cjs.Shape();
  this.shape_152.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_152.setTransform(59.2, 42.1781);
  this.shape_153 = new cjs.Shape();
  this.shape_153.graphics.f("#0C593C").s().p("AALAgIAAg3IgWAAIAAA3IgJAAIAAg/IApAAIAAA/g");
  this.shape_153.setTransform(54.35, 42.2);
  this.shape_154 = new cjs.Shape();
  this.shape_154.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_154.setTransform(47.375, 42.2);
  this.shape_155 = new cjs.Shape();
  this.shape_155.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_155.setTransform(42.325, 42.2);
  this.shape_156 = new cjs.Shape();
  this.shape_156.graphics.f("#0C593C").s().p("AAPApIAAgSIgmAAIAAg/IAJAAIAAA4IAWAAIAAg4IAKAAIAAA4IAFAAIAAAZg");
  this.shape_156.setTransform(37.65, 43.075);
  this.shape_157 = new cjs.Shape();
  this.shape_157.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_157.setTransform(33.025, 42.2);
  this.shape_158 = new cjs.Shape();
  this.shape_158.graphics.f("#0C593C").s().p("AgVAqIAAgJIADACIAEAAQAEAAADgEQACgDACgGIgUhAIAJAAIAOAyIAPgyIAJAAIgUBAIgEAKQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_158.setTransform(28.475, 43.3);
  this.shape_159 = new cjs.Shape();
  this.shape_159.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_159.setTransform(24.005, 43.225);
  this.shape_160 = new cjs.Shape();
  this.shape_160.graphics.f("#0C593C").s().p("AgDAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_160.setTransform(19.6, 42.2);
  this.shape_161 = new cjs.Shape();
  this.shape_161.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_161.setTransform(15.675, 42.175);
  this.shape_162 = new cjs.Shape();
  this.shape_162.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_162.setTransform(11.05, 42.2);
  this.shape_163 = new cjs.Shape();
  this.shape_163.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_163.setTransform(6.075, 42.2);
  this.shape_164 = new cjs.Shape();
  this.shape_164.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAAEIgBACIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_164.setTransform(294.525, 30.25);
  this.shape_165 = new cjs.Shape();
  this.shape_165.graphics.f("#0C593C").s().p("AAUAgIAAg3IgBAAIgQA3IgFAAIgQg3IgBAAIAAA3IgIAAIAAg/IAOAAIALApIACAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_165.setTransform(288.8, 30.25);
  this.shape_166 = new cjs.Shape();
  this.shape_166.graphics.f("#0C593C").s().p("AAVAgIAAg/IAJAAIAAA/gAgdAgIAAg/IAJAAIAAAaIAOAAQAEABAEACQAEACACAEQACAEAAAGQAAAIgFAFQgFAFgGAAgAgUAYIAKAAQAGAAADgDQACgCAAgGQAAgFgCgDQgCgDgHAAIgKAAg");
  this.shape_166.setTransform(282.25, 30.25);
  this.shape_167 = new cjs.Shape();
  this.shape_167.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAaIAWAAIAAgaIAJAAIAAA/g");
  this.shape_167.setTransform(276.5, 30.25);
  this.shape_168 = new cjs.Shape();
  this.shape_168.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_168.setTransform(271.65, 30.25);
  this.shape_169 = new cjs.Shape();
  this.shape_169.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFQAAgFgDgDQgBgCgFAAQgFAAgCADQgCADAAAFIgIAAQgBgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQACADAAAFIAAAlIABADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgGQgCAEgEADQgDADgFAAQgIAAgEgFgAABABIgGADQgDACgCADQgCACAAAFQAAAEACADQADADAEAAQADAAADgCIAEgFIABgGIAAgPIgHADg");
  this.shape_169.setTransform(267.15, 30.225);
  this.shape_170 = new cjs.Shape();
  this.shape_170.graphics.f("#0C593C").s().p("AASApIAAgSIgkAAIAAASIgIAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_170.setTransform(262.4, 31.125);
  this.shape_171 = new cjs.Shape();
  this.shape_171.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_171.setTransform(255.825, 30.225);
  this.shape_172 = new cjs.Shape();
  this.shape_172.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAAEIgBACIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_172.setTransform(249.075, 30.25);
  this.shape_173 = new cjs.Shape();
  this.shape_173.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAAEIgBACIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_173.setTransform(244.025, 30.25);
  this.shape_174 = new cjs.Shape();
  this.shape_174.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACAEAAAEQAAAHgDAEQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_174.setTransform(239.375, 30.25);
  this.shape_175 = new cjs.Shape();
  this.shape_175.graphics.f("#0C593C").s().p("AgDAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_175.setTransform(235.15, 30.25);
  this.shape_176 = new cjs.Shape();
  this.shape_176.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_176.setTransform(231.225, 30.225);
  this.shape_177 = new cjs.Shape();
  this.shape_177.graphics.f("#0C593C").s().p("AgDAgIAAg3IgSAAIAAgIIArAAIAAAIIgRAAIAAA3g");
  this.shape_177.setTransform(227.15, 30.25);
  this.shape_178 = new cjs.Shape();
  this.shape_178.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_178.setTransform(223.125, 30.2281);
  this.shape_179 = new cjs.Shape();
  this.shape_179.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACAEAAAEQAAAHgDAEQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_179.setTransform(218.825, 30.25);
  this.shape_180 = new cjs.Shape();
  this.shape_180.graphics.f("#0C593C").s().p("AgEAgIAAg3IgQAAIAAgIIApAAIAAAIIgRAAIAAA3g");
  this.shape_180.setTransform(214.6, 30.25);
  this.shape_181 = new cjs.Shape();
  this.shape_181.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_181.setTransform(210.3, 30.2281);
  this.shape_182 = new cjs.Shape();
  this.shape_182.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_182.setTransform(205.4, 30.2281);
  this.shape_183 = new cjs.Shape();
  this.shape_183.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_183.setTransform(200.875, 30.225);
  this.shape_184 = new cjs.Shape();
  this.shape_184.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACAEAAAEQAAAHgDAEQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_184.setTransform(194.525, 30.25);
  this.shape_185 = new cjs.Shape();
  this.shape_185.graphics.f("#0C593C").s().p("AgEAgIAAgMIAJAAIAAAMgAgEgTIAAgLIAJAAIAAALg");
  this.shape_185.setTransform(189.15, 30.3);
  this.shape_186 = new cjs.Shape();
  this.shape_186.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEAEgCIAJgEIAEgBIAEgCIACgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgBADgBAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_186.setTransform(186.1, 30.225);
  this.shape_187 = new cjs.Shape();
  this.shape_187.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACAEAAAEQAAAHgDAEQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_187.setTransform(181.725, 30.25);
  this.shape_188 = new cjs.Shape();
  this.shape_188.graphics.f("#0C593C").s().p("AgEAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_188.setTransform(177.5, 30.25);
  this.shape_189 = new cjs.Shape();
  this.shape_189.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_189.setTransform(173.575, 30.225);
  this.shape_190 = new cjs.Shape();
  this.shape_190.graphics.f("#0C593C").s().p("AATApIAAgSIgkAAIAAASIgJAAIAAgZIAFAAIAFgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_190.setTransform(168.85, 31.125);
  this.shape_191 = new cjs.Shape();
  this.shape_191.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_191.setTransform(164.175, 30.2281);
  this.shape_192 = new cjs.Shape();
  this.shape_192.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_192.setTransform(159.705, 31.275);
  this.shape_193 = new cjs.Shape();
  this.shape_193.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_193.setTransform(155.075, 30.225);
  this.shape_194 = new cjs.Shape();
  this.shape_194.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIAAANQACAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_194.setTransform(148.4, 30.2281);
  this.shape_195 = new cjs.Shape();
  this.shape_195.graphics.f("#0C593C").s().p("AgQAgIAAg/IAhAAIAAAIIgYAAIAAA3g");
  this.shape_195.setTransform(144.525, 30.25);
  this.shape_196 = new cjs.Shape();
  this.shape_196.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDABgGIACgNQAAgJgCgGQgBgGgDgCQgDgDgFAAQgEAAgDADg");
  this.shape_196.setTransform(140, 30.2281);
  this.shape_197 = new cjs.Shape();
  this.shape_197.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_197.setTransform(135.15, 30.25);
  this.shape_198 = new cjs.Shape();
  this.shape_198.graphics.f("#0C593C").s().p("AAKAgIAAgeIgGABIgHABQgFgBgEgCQgDgBgCgEQgBgEAAgEIAAgTIAJAAIAAASQAAAFACADQABABAGAAIAHAAIADAAIAAgbIAKAAIAAA/g");
  this.shape_198.setTransform(130.35, 30.25);
  this.shape_199 = new cjs.Shape();
  this.shape_199.graphics.f("#0C593C").s().p("AAVAgIAAg/IAJAAIAAA/gAgdAgIAAg/IAJAAIAAAaIANAAQAGABACACQAEACADAEQACAEAAAGQAAAIgFAFQgFAFgHAAgAgUAYIAKAAQAGAAADgDQABgCAAgGQAAgFgBgDQgDgDgGAAIgKAAg");
  this.shape_199.setTransform(124.9, 30.25);
  this.shape_200 = new cjs.Shape();
  this.shape_200.graphics.f("#0C593C").s().p("AgNAoQgFgEgCgJQgCgIAAgNQAAgNADgJQACgJAEgEQAFgGAHgBIAJgDQAEgBAAgDIAHAAQgBAGgFADQgEADgHACQgHABgDAFQgFAGAAAIQADgFADgDQAEgCAEAAQALAAAFAIQAGAIAAANQAAARgFAJQgGAIgMAAQgHAAgGgEgAgHgIQgCACgCAGQgCAEAAAGQAAANAEAHQADAGAGAAQAHAAAEgGQACgHAAgNQAAgGgBgEQgBgFgDgDQgEgDgEAAQgEAAgDADg");
  this.shape_200.setTransform(119.1, 29.2);
  this.shape_201 = new cjs.Shape();
  this.shape_201.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIAAANQACAGACADQADADAFAAQAGAAACgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_201.setTransform(114.2, 30.2281);
  this.shape_202 = new cjs.Shape();
  this.shape_202.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_202.setTransform(106.975, 30.275);
  this.shape_203 = new cjs.Shape();
  this.shape_203.graphics.f("#0C593C").s().p("AgVAqIAAgIIADABIAEAAQAEAAADgEQACgEACgFIgUhAIAJAAIAOAyIAPgyIAJAAIgUA/IgEALQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_203.setTransform(102.825, 31.35);
  this.shape_204 = new cjs.Shape();
  this.shape_204.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_204.setTransform(98.575, 30.225);
  this.shape_205 = new cjs.Shape();
  this.shape_205.graphics.f("#0C593C").s().p("AALAgIAAg3IgWAAIAAA3IgJAAIAAg/IApAAIAAA/g");
  this.shape_205.setTransform(93.95, 30.25);
  this.shape_206 = new cjs.Shape();
  this.shape_206.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgBACgBAFQAAAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_206.setTransform(89.45, 30.225);
  this.shape_207 = new cjs.Shape();
  this.shape_207.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_207.setTransform(85.325, 30.25);
  this.shape_208 = new cjs.Shape();
  this.shape_208.graphics.f("#0C593C").s().p("AgWArIABgKQAAgFADgEQACgEAEgFIALgKIAGgGIAFgIQACgEABgFQAAgHgDgEQgDgEgHgBQgFAAgDADQgCADgBAFIgBAKIgKAAIAAgEQAAgHADgGQACgFAFgEQAFgDAHAAQAIAAAFADQAEADADAFQACAGAAAHQAAAGgCAFQgCAFgDADIgIAIIgJAKIgGAGIgDAEIgBAGIAjAAIAAAIg");
  this.shape_208.setTransform(78.325, 29.125);
  this.shape_209 = new cjs.Shape();
  this.shape_209.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIACANQABAGADADQACADAFAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgDgDgFAAQgEAAgDADg");
  this.shape_209.setTransform(71.5, 30.2281);
  this.shape_210 = new cjs.Shape();
  this.shape_210.graphics.f("#0C593C").s().p("AgDAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_210.setTransform(67.2, 30.25);
  this.shape_211 = new cjs.Shape();
  this.shape_211.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_211.setTransform(63.275, 30.225);
  this.shape_212 = new cjs.Shape();
  this.shape_212.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_212.setTransform(58.875, 30.2281);
  this.shape_213 = new cjs.Shape();
  this.shape_213.graphics.f("#0C593C").s().p("AATAgIAAg3IAAAAIgQA3IgFAAIgQg3IAAAAIAAA3IgJAAIAAg/IAOAAIAMApIABAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_213.setTransform(53.5, 30.25);
  this.shape_214 = new cjs.Shape();
  this.shape_214.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACAEAAAEQAAAHgDAEQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_214.setTransform(48.175, 30.25);
  this.shape_215 = new cjs.Shape();
  this.shape_215.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgBACgBAFQAAAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_215.setTransform(41.75, 30.225);
  this.shape_216 = new cjs.Shape();
  this.shape_216.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_216.setTransform(36.725, 30.275);
  this.shape_217 = new cjs.Shape();
  this.shape_217.graphics.f("#0C593C").s().p("AgVAqIAAgIIADABIAEAAQAEAAADgEQACgEACgFIgUhAIAJAAIAOAyIAPgyIAJAAIgUA/IgEALQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_217.setTransform(32.575, 31.35);
  this.shape_218 = new cjs.Shape();
  this.shape_218.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_218.setTransform(28.325, 30.225);
  this.shape_219 = new cjs.Shape();
  this.shape_219.graphics.f("#0C593C").s().p("AALAgIAAg3IgVAAIAAA3IgJAAIAAg/IAnAAIAAA/g");
  this.shape_219.setTransform(23.7, 30.25);
  this.shape_220 = new cjs.Shape();
  this.shape_220.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFQAAgFgDgDQgBgCgFAAQgFAAgCADQgCADAAAFIgIAAQgBgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQACADAAAFIAAAlIABADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgGQgCAEgEADQgDADgFAAQgIAAgEgFgAABABIgGADQgDACgCADQgCACAAAFQAAAEACADQADADAEAAQADAAADgCIAEgFIABgGIAAgPIgHADg");
  this.shape_220.setTransform(19.2, 30.225);
  this.shape_221 = new cjs.Shape();
  this.shape_221.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_221.setTransform(15.075, 30.25);
  this.shape_222 = new cjs.Shape();
  this.shape_222.graphics.f("#0C593C").s().p("AAEArIAAg+IgRAAIAAgHQAGAAAEgCQAEgBACgDQADgDABgHIAHAAIAABVg");
  this.shape_222.setTransform(7.5, 29.125);
  this.shape_223 = new cjs.Shape();
  this.shape_223.graphics.f("#0C593C").s().p("AAAAGIgHALIgFgEIAIgLIgNgDIACgGIANAGIAAgPIAFAAIAAAOIANgFIACAGIgNADIAIALIgEAEg");
  this.shape_223.setTransform(3.275, 26.5);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.l4, new cjs.Rectangle(-3, 20, 303, 53.8), null);
 (lib.l3 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AAnA+IAAhNIAAgNIAAgOIAAAAIghBoIgMAAIghhoIAAAAIAAAOIABANIAABNIgPAAIAAh7IAWAAIAfBkIAfhkIAXAAIAAB7g");
  this.shape.setTransform(288.075, 66.925);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AgYA3QgLgIgEgPQgFgOAAgSQAAgeAMgQQAKgQAWAAQAQAAAJAIQAKAIAFAOQAFAPAAARQAAASgFAOQgFAPgKAIQgJAIgQAAQgPAAgJgIgAgVgkQgGAMgBAYQABAYAGANQAIANANAAQAOAAAHgNQAHgNAAgYQAAgYgHgMQgHgNgOAAQgNAAgIANg");
  this.shape_1.setTransform(276.85, 66.925);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AgHA+IAAhtIgcAAIAAgOIBHAAIAAAOIgdAAIAABtg");
  this.shape_2.setTransform(268.55, 66.925);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgXAvQgNgRAAgeQAAgRAFgOQAGgOAKgJQALgIAOAAQAPAAAMAGIgGANIgKgFQgEgBgGAAQgLAAgGAGQgHAIgDALQgEALAAAOQABAXAHANQAJANAOAAQAGAAAFgBQAHgBAEgCIAAANQgKAEgNABQgVAAgMgRg");
  this.shape_3.setTransform(261.55, 66.9);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AAaA+IAAhIIABgOIAAgOIAAAAIgxBkIgTAAIAAh7IAPAAIAABHIAAAOIAAAOIAAAAIAwhjIAUAAIAAB7g");
  this.shape_4.setTransform(252.4, 66.925);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgpA9IAAgNQACABAFAAQAFABADgHQADgGABgOIADgVIADgdIAEgjIA2AAIAAB7IgPAAIAAhtIgbAAIAAAVIgDAVIgCATIgCAPIgFATQgDAJgEADQgFADgIABQgGAAgDgCg");
  this.shape_5.setTransform(242.125, 67);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AAcA+IgLgnIghAAIgLAnIgQAAIAjh7IAQAAIAkB7gAgBgmIgCAJIgKAnIAbAAIgKgnIgCgJIgCgJIgBAJg");
  this.shape_6.setTransform(234.45, 66.925);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AAaA+IAAhIIAAgOIACgOIgCAAIgwBkIgSAAIAAh7IAPAAIAABHIgBAOIgBAOIABAAIAwhjIATAAIAAB7g");
  this.shape_7.setTransform(225.45, 66.925);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AAeBOIAAghIhJAAIAAh6IAPAAIAABtIAsAAIAAhtIAPAAIAABtIANAAIAAAug");
  this.shape_8.setTransform(216, 68.575);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgbA+IAAh7IA3AAIAAANIgnAAIAAAoIAkAAIAAAMIgkAAIAAAsIAnAAIAAAOg");
  this.shape_9.setTransform(207.475, 66.925);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AAWA+IAAhtIgrAAIAABtIgQAAIAAh7IBLAAIAAB7g");
  this.shape_10.setTransform(198.9, 66.925);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgYAvQgMgRAAgeQAAgRAFgOQAGgOAKgJQAKgIAPAAQAPAAAMAGIgGANIgKgFQgFgBgFAAQgLAAgGAGQgGAIgEALQgEALAAAOQABAXAHANQAJANAOAAQAGAAAFgBQAHgBAEgCIAAANQgKAEgNABQgWAAgMgRg");
  this.shape_11.setTransform(190.55, 66.9);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AgZA3QgJgIgFgPQgFgOAAgSQAAgeALgQQALgQAWAAQAPAAAKAIQALAIAEAOQAFAPAAARQAAASgFAOQgEAPgLAIQgKAIgPAAQgPAAgKgIgAgUgkQgIAMAAAYQAAAYAIANQAGANAOAAQAOAAAIgNQAGgNAAgYQAAgYgGgMQgIgNgOAAQgOAAgGANg");
  this.shape_12.setTransform(178.8, 66.925);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgXAvQgNgRAAgeQAAgRAFgOQAGgOAKgJQAKgIAPAAQAPAAAMAGIgGANIgKgFQgEgBgGAAQgLAAgGAGQgHAIgDALQgEALAAAOQABAXAHANQAJANAOAAQAGAAAFgBQAHgBAEgCIAAANQgKAEgNABQgVAAgMgRg");
  this.shape_13.setTransform(170.2, 66.9);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AghA+IAAh7IAQAAIAAA0IAMAAQAUAAAKAJQAJAIAAARQAAARgKAKQgKAKgSAAgAgRAxIAMAAQAXAAAAgYQAAgLgGgGQgGgFgLAAIgMAAg");
  this.shape_14.setTransform(157.1, 66.925);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AgYAvQgMgRAAgeQAAgRAGgOQAEgOALgJQALgIAOAAQAPAAAMAGIgGANIgJgFQgGgBgGAAQgKAAgGAGQgHAIgDALQgDALAAAOQgBAXAJANQAIANAOAAQAGAAAGgBQAGgBAFgCIAAANQgLAEgOABQgUAAgNgRg");
  this.shape_15.setTransform(149.1, 66.9);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AgbA+IAAh7IA3AAIAAANIgnAAIAAAoIAkAAIAAAMIgkAAIAAAsIAnAAIAAAOg");
  this.shape_16.setTransform(141.775, 66.925);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgHA+IAAhtIgcAAIAAgOIBHAAIAAAOIgdAAIAABtg");
  this.shape_17.setTransform(134.7, 66.925);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AAaBRIAAhJIAAgNIABgOIgBAAIgwBkIgSAAIAAh7IAOAAIAABHIAAAOIgBAOIABAAIAxhjIATAAIAAB7gAgTg8QgGgGgBgOIAOAAQAAAKADADQAEAEAGAAQAGAAAEgEQADgEACgJIAMAAQgBANgGAHQgHAGgNAAQgNAAgHgGg");
  this.shape_18.setTransform(126.15, 65.025);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AgeA+IgFgBIAAgOQAFACAGAAQAEAAAEgCQADgBACgGIAGgNIgjhZIARAAIAVA6IACAGIACAIIAAAAIACgIIABgEIATg8IAQAAIgdBYQgEAOgFAHQgEAJgFADQgHADgJABIgHgBg");
  this.shape_19.setTransform(117.55, 67);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AggA+IAAh7IAaAAQAUAAAJAJQAKAKAAASQAAASgKAJQgJALgVAAIgJAAIAAAwgAgQABIAIAAQAMAAAGgFQAHgGAAgOQAAgNgGgFQgGgGgLAAIgKAAg");
  this.shape_20.setTransform(110.425, 66.925);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AAaA+IAAhIIABgOIAAgOIAAAAIgxBkIgTAAIAAh7IAPAAIAABHIAAAOIAAAOIAAAAIAwhjIAUAAIAAB7g");
  this.shape_21.setTransform(101.2, 66.925);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AgHA+IAAhtIgcAAIAAgOIBHAAIAAAOIgdAAIAABtg");
  this.shape_22.setTransform(92.8, 66.925);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AghA+IAAh7IAPAAIAAA0IAOAAQATAAAJAJQAKAIAAARQAAARgKAKQgKAKgSAAgAgSAxIAOAAQAWAAAAgYQAAgLgGgGQgFgFgMAAIgNAAg");
  this.shape_23.setTransform(85.75, 66.925);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgpA9IAAgNQACABAFAAQAFABADgHQADgGABgOIADgVIADgdIAEgjIA2AAIAAB7IgPAAIAAhtIgbAAIAAAVIgDAVIgCATIgCAPIgFATQgDAJgEADQgFADgIABQgGAAgDgCg");
  this.shape_24.setTransform(76.275, 67);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AgeA+IgFgBIAAgOQAFACAGAAQAEAAAEgCQADgBACgGIAGgNIgjhZIARAAIAVA6IACAGIACAIIAAAAIACgIIABgEIATg8IAQAAIgdBYQgEAOgFAHQgEAJgFADQgHADgJABIgHgBg");
  this.shape_25.setTransform(68.95, 67);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AgXAvQgNgRAAgeQAAgRAGgOQAEgOALgJQALgIAOAAQAPAAAMAGIgGANIgJgFQgFgBgGAAQgLAAgGAGQgHAIgDALQgDALgBAOQABAXAHANQAJANAOAAQAGAAAGgBQAFgBAFgCIAAANQgKAEgNABQgVAAgMgRg");
  this.shape_26.setTransform(61.65, 66.9);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AAXA+IAAg6IgsAAIAAA6IgQAAIAAh7IAQAAIAAA1IAsAAIAAg1IAPAAIAAB7g");
  this.shape_27.setTransform(52.8, 66.925);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AgYA3QgKgIgFgPQgFgOAAgSQAAgeAMgQQAKgQAWAAQAPAAAKAIQALAIAEAOQAFAPAAARQAAASgFAOQgEAPgLAIQgKAIgPAAQgPAAgJgIgAgUgkQgIAMAAAYQAAAYAIANQAHANANAAQAOAAAIgNQAGgNAAgYQAAgYgGgMQgIgNgOAAQgNAAgHANg");
  this.shape_28.setTransform(43.1, 66.925);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AATA+Igng/IAAA/IgPAAIAAh7IAPAAIAAA8IAmg8IARAAIgnA8IApA/g");
  this.shape_29.setTransform(34.95, 66.925);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AgYA3QgLgIgEgPQgFgOAAgSQAAgeALgQQAMgQAVAAQAPAAALAIQAJAIAFAOQAFAPAAARQAAASgFAOQgFAPgJAIQgLAIgPAAQgPAAgJgIgAgVgkQgGAMAAAYQAAAYAGANQAIANANAAQAPAAAGgNQAHgNAAgYQAAgYgHgMQgGgNgPAAQgNAAgIANg");
  this.shape_30.setTransform(25.4, 66.925);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AggA+IAAh7IAaAAQAUAAAJAJQAKAKAAASQAAASgKAJQgJALgVAAIgJAAIAAAwgAgQABIAIAAQAMAAAGgFQAHgGAAgOQAAgNgGgFQgGgGgLAAIgKAAg");
  this.shape_31.setTransform(17.025, 66.925);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#0C593C").s().p("AAWA+IAAhtIgrAAIAABtIgPAAIAAh7IBJAAIAAB7g");
  this.shape_32.setTransform(7.95, 66.925);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#0C593C").s().p("AgWArIABgKQAAgFADgEQACgEAEgFIALgKIAGgGIAFgIQACgEABgFQAAgHgDgEQgDgEgHgBQgFAAgDADQgCADgBAFIgBAKIgKAAIAAgEQAAgHADgGQACgFAFgEQAFgDAHAAQAIAAAFADQAEADADAFQACAGAAAHQAAAGgCAFQgCAFgDADIgIAIIgJAKIgGAGIgDAEIgBAGIAjAAIAAAIg");
  this.shape_33.setTransform(275.575, 33.575);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape_34.setTransform(268.8, 37.325);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#0C593C").s().p("AALAgIAAg4IgWAAIAAA4IgJAAIAAg/IApAAIAAA/g");
  this.shape_35.setTransform(264.7, 34.7);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_36.setTransform(259.255, 35.725);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_37.setTransform(253.55, 34.6781);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_38.setTransform(248.525, 34.7);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#0C593C").s().p("AgEAJQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIAAgEIgEAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_39.setTransform(241.6, 38.175);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#0C593C").s().p("AgOAqQACgUAIgUQAHgSANgRIgnAAIAAgIIAvAAIAAAIQgNAQgHATQgGAUgCAUg");
  this.shape_40.setTransform(237.475, 33.675);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#0C593C").s().p("AAEArIAAg+IgRAAIAAgHQAGAAAEgCQAEgBADgDQACgDAAgHIAIAAIAABVg");
  this.shape_41.setTransform(231.3, 33.575);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape_42.setTransform(227.8, 37.325);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#0C593C").s().p("AASApIAAgSIgjAAIAAASIgJAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_43.setTransform(223.6, 35.575);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#0C593C").s().p("AgEAJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIABgEIAAgEIgEAAIAAgLIAJAAIAAANQAAAEgCAEQgDAEgEACg");
  this.shape_44.setTransform(216.7, 38.175);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#0C593C").s().p("AALAgIAAgbIgJAAIgMAbIgKAAIANgcQgFgCgDgDQgDgGAAgGQAAgJAFgEQAFgFAIAAIAVAAIAAA/gAgGgUQgCACgBAGQABAEACADQADAEAEAAIAKAAIAAgXIgJAAQgGAAgCAEg");
  this.shape_45.setTransform(212.55, 34.7);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFQAAgFgDgDQgBgCgFAAQgFAAgCADQgCADAAAFIgIAAQgBgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQACADAAAFIAAAlIABADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgGQgCAEgEADQgDADgFAAQgIAAgEgFgAABABIgGADQgDACgCADQgCACAAAFQAAAEACADQADADAEAAQADAAADgCIAEgFIABgGIAAgPIgHADg");
  this.shape_46.setTransform(207.75, 34.675);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_47.setTransform(202.925, 34.7);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_48.setTransform(197.625, 34.675);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#0C593C").s().p("AgDAgIAAg4IgRAAIAAgHIAqAAIAAAHIgRAAIAAA4g");
  this.shape_49.setTransform(192.85, 34.7);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAEgBIADgCIADgBQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFQgBgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgIAAQAAgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIAEgFIABgGIAAgPIgIADg");
  this.shape_50.setTransform(188.25, 34.675);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_51.setTransform(182.525, 34.725);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#0C593C").s().p("AAUAgIAAg/IAJAAIAAA/gAgcAgIAAg/IAJAAIAAAaIAMAAQAFAAADADQAEACADAEQACAEAAAGQAAAIgFAFQgFAFgHAAgAgTAZIAJAAQAHAAACgEQABgCAAgFQAAgGgBgDQgDgDgFAAIgKAAg");
  this.shape_52.setTransform(176.35, 34.7);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_53.setTransform(170.005, 35.725);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#0C593C").s().p("AAPArIgVgqIgKAMIAAAeIgKAAIAAhVIAKAAIAAArIAegrIAMAAIgbAkIAcAxg");
  this.shape_54.setTransform(164.35, 33.575);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape_55.setTransform(156.8, 37.325);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_56.setTransform(152.325, 34.725);
  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#0C593C").s().p("AgVAqIAAgJIADACIAEAAQAEAAADgDQACgFACgFIgUhAIAJAAIAOAyIAPgyIAJAAIgUBAIgEAKQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_57.setTransform(147.475, 35.8);
  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#0C593C").s().p("AgEAJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIAAgEIgEAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_58.setTransform(140.9, 38.175);
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgBACgBAFQAAAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_59.setTransform(137.15, 34.675);
  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACADAAAFQAAAGgDAEQgCAEgFACQAGAAADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGAAACgEQADgCgBgGQAAgFgCgDQgDgDgFAAIgKAAgAgKgFIAKAAQAEAAADgCQACgCAAgGQAAgEgCgCQgDgDgEAAIgKAAg");
  this.shape_60.setTransform(132.075, 34.7);
  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_61.setTransform(127.125, 34.7);
  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_62.setTransform(121.825, 34.675);
  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIAAANQACAGACADQADADAFAAQAGAAACgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_63.setTransform(116.45, 34.6781);
  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#0C593C").s().p("AAaArIAAhGIAAgGIABgFIgBAAIgBAGIgCAGIgSBFIgKAAIgShGIgBgFIgCgGIAAAGIAAAFIAABGIgJAAIAAhVIARAAIARBCIABAGIAAAHIAAAAIAAgGIACgHIARhCIARAAIAABVg");
  this.shape_64.setTransform(109.25, 33.575);
  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape_65.setTransform(100.8, 37.325);
  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#0C593C").s().p("AgQAgIAAg/IAhAAIAAAHIgYAAIAAA4g");
  this.shape_66.setTransform(97.675, 34.7);
  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#0C593C").s().p("AgEAJQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIABgEIgFAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_67.setTransform(91.2, 38.175);
  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#0C593C").s().p("AAHArIAAgVIgeAAIAAgJIAfg3IAJAAIAAA3IAHAAIAAAJIgHAAIAAAVgAgPANIAWAAIAAgog");
  this.shape_68.setTransform(86.95, 33.575);
  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#0C593C").s().p("AAFArIAAg+IgSAAIAAgHQAGAAAEgCQAEgBADgDQACgDAAgHIAIAAIAABVg");
  this.shape_69.setTransform(80.9, 33.575);
  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#0C593C").s().p("AgMAoQgFgDgCgGQgDgGgBgHIAAgOIAAgLIACgNQABgGADgFQADgGAFgDQAEgDAGAAQAGAAAEADQAFACADAFQACAEAAAHIgJAAQAAgHgDgDQgDgDgGAAQgDAAgCADQgDADgBAEQgCAEAAAEIgCAJIgBAHQADgFAEgDQAFgDADAAQAIABAFADQAFAEACAFQADAGAAAHQgBAJgDAHQgCAHgGADQgFAEgGAAQgIAAgFgEgAgHAAQgDABgBAEIgCAIQABAJACAEQABAFADACQAEADACgBQAGAAADgDQADgDABgFIABgKIgCgJQgBgEgCgBQgDgDgGAAQgFAAgCADg");
  this.shape_70.setTransform(76, 33.675);
  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#0C593C").s().p("AAFArIAAg+IgSAAIAAgHQAGAAAFgCQADgBACgDQADgDABgHIAHAAIAABVg");
  this.shape_71.setTransform(69.8, 33.575);
  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#0C593C").s().p("AgWArIABgKQAAgFADgEQACgEAEgFIALgKIAGgGIAFgIQACgEABgFQAAgHgDgEQgDgEgHgBQgFAAgDADQgCADgBAFIgBAKIgKAAIAAgEQAAgHADgGQACgFAFgEQAFgDAHAAQAIAAAFADQAEADADAFQACAGAAAHQAAAGgCAFQgCAFgDADIgIAIIgJAKIgGAGIgDAEIgBAGIAjAAIAAAIg");
  this.shape_72.setTransform(64.825, 33.575);
  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#0C593C").s().p("AAEArIAAg+IgRAAIAAgHQAGAAAEgCQAEgBACgDQADgDAAgHIAIAAIAABVg");
  this.shape_73.setTransform(58.7, 33.575);
  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#0C593C").s().p("AgEAJQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIABgEIgFAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_74.setTransform(52.5, 38.175);
  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#0C593C").s().p("AALAgIAAgbIgJAAIgMAbIgKAAIAOgcQgGgCgDgDQgDgGAAgGQAAgJAFgEQAFgFAIAAIAVAAIAAA/gAgGgUQgCACAAAGQAAAEACADQADAEAFAAIAJAAIAAgXIgJAAQgFAAgDAEg");
  this.shape_75.setTransform(48.35, 34.7);
  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgDIABgFIAAAAIgBAEIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAwIgBADIAAADIAAACIAAgCIABgDIABgDIAUgwIALAAIAAA/g");
  this.shape_76.setTransform(43.075, 34.7);
  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_77.setTransform(37.775, 34.675);
  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_78.setTransform(32.775, 34.675);
  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIACANQABAGACADQADADAFAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgDgDgFAAQgEAAgDADg");
  this.shape_79.setTransform(27.4, 34.6781);
  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#0C593C").s().p("AgYArIAAhVIAYAAQAHAAAGACQAGADADAFQADAGAAAIQAAAKgEAGQgDAEgHADQgGACgHAAIgNAAIAAAkgAgPgBIAKAAQAFAAAGgBQAEgBACgEQADgEAAgHQAAgGgCgDQgCgEgEgBQgEgCgFAAIgNAAg");
  this.shape_80.setTransform(21.55, 33.575);
  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#0C593C").s().p("AgEAJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIAAgEIgEAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_81.setTransform(211.2, 27.225);
  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#0C593C").s().p("AACAMIALgMIgLgLIAAgJIARASIAAAGIgRARgAgSAMIAMgMIgMgLIAAgJIARASIAAAGIgRARg");
  this.shape_82.setTransform(207.1, 23.375);
  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_83.setTransform(201.55, 23.75);
  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_84.setTransform(195.95, 23.7281);
  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_85.setTransform(190.725, 23.725);
  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_86.setTransform(185.4, 23.75);
  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_87.setTransform(179.8, 23.7281);
  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f("#0C593C").s().p("AAcAgIgQggIgHAJIAAAXIgIAAIAAgXIgHgJIgQAgIgLAAIAUgmIgTgZIAKAAIAXAeIAAgeIAIAAIAAAeIAWgeIALAAIgUAZIAUAmg");
  this.shape_88.setTransform(173.175, 23.75);
  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f("#0C593C").s().p("AAZA1IAAgUIgxAAIAAAUIgJAAIAAgcIAGAAQAEgHACgIIADgRIAAgXIAAgWIAtAAIAABNIAHAAIAAAcgAgIgVQAAAPgCALQgCALgFAJIAiAAIAAhFIgZAAg");
  this.shape_89.setTransform(165.825, 23.625);
  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f("#0C593C").s().p("AgXAmQgHgHAAgMQAAgGACgFQACgFAEgDIAKgGIgGgJQgDgFAAgFQAAgFACgEQACgEAEgDQAEgCAFAAQAHAAAFAEQAFAFAAAIQAAAFgCAEIgGAHIgGAGIAQAXIACgIIABgIIAIAAIgBAMQgCAGgDAGIALAPIgLAAIgFgHQgEAFgFACQgFACgGAAQgMAAgGgGgAgPAFIgEAGQgBAEAAAEQAAAIAEAEQAFAFAHAAQAEAAADgDIAHgFIgSgcIgHAFgAgKghQgCADAAAEQAAAEACAEIAFAHIAGgGQACgEAAgFQAAgEgCgDQgBgCgEAAQgEAAgCACg");
  this.shape_90.setTransform(158.675, 22.725);
  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_91.setTransform(152.05, 23.75);
  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_92.setTransform(146.45, 23.7281);
  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_93.setTransform(141.225, 23.725);
  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_94.setTransform(135.9, 23.75);
  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_95.setTransform(130.3, 23.7281);
  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f("#0C593C").s().p("AAcAgIgQggIgHAJIAAAXIgIAAIAAgXIgHgJIgQAgIgLAAIAUgmIgTgZIAKAAIAXAeIAAgeIAIAAIAAAeIAWgeIALAAIgUAZIAUAmg");
  this.shape_96.setTransform(123.675, 23.75);
  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f("#0C593C").s().p("AAZA1IAAgUIgxAAIAAAUIgJAAIAAgcIAGAAQAEgHACgIIADgRIAAgXIAAgWIAtAAIAABNIAHAAIAAAcgAgIgVQAAAPgCALQgCALgFAJIAiAAIAAhFIgZAAg");
  this.shape_97.setTransform(116.325, 23.625);
  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f("#0C593C").s().p("AABADIAAgGIASgRIAAAJIgMALIAMAMIAAAJgAgSADIAAgGIARgRIAAAJIgLALIALAMIAAAJg");
  this.shape_98.setTransform(110.05, 23.375);
  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f("#0C593C").s().p("AgOAqQgFgFgDgFQgDgHgCgIIgBgRIABgPQACgHADgHQADgHAFgEQAGgEAIAAQAKAAAFAEQAGAEADAHQACAHABAHIACAPIgCARQgBAIgCAHQgDAFgGAFQgFADgKAAQgIAAgGgDgAgLgfQgDAEgCAIQgCAJAAAJQAAALACAJQABAJAEAEQAEAFAHgBQAIABAEgFQAEgEABgJIABgUQAAgJgBgJQgBgHgEgFQgFgEgHgBQgHABgEAEg");
  this.shape_99.setTransform(101.15, 22.65);
  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f("#0C593C").s().p("AgOAqQgGgFgDgFQgCgHgBgIIgBgRIABgPQABgHACgHQADgHAGgEQAGgEAIAAQAKAAAFAEQAGAEADAHQACAHACAHIAAAPIAAARQgCAIgCAHQgDAFgGAFQgFADgKAAQgIAAgGgDgAgKgfQgEAEgCAIQgCAJABAJQgBALACAJQABAJAEAEQAEAFAHgBQAIABAEgFQAEgEACgJIABgUQgBgJgBgJQgCgHgEgFQgDgEgIgBQgGABgEAEg");
  this.shape_100.setTransform(94.35, 22.65);
  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f("#0C593C").s().p("AgOAqQgFgFgDgFQgEgHgBgIIgBgRIABgPQABgHAEgHQADgHAFgEQAGgEAIAAQAJAAAGAEQAGAEADAHQADAHAAAHIABAPIgBARQAAAIgDAHQgDAFgGAFQgGADgJAAQgIAAgGgDgAgKgfQgEAEgCAIQgBAJgBAJQABALABAJQABAJAEAEQAEAFAHgBQAIABAEgFQAEgEABgJIABgUQAAgJgBgJQgBgHgEgFQgFgEgHgBQgHABgDAEg");
  this.shape_101.setTransform(87.55, 22.65);
  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f("#0C593C").s().p("AABAMIAMgMIgMgLIAAgJIASASIAAAGIgSARgAgSAMIALgMIgLgLIAAgJIARASIAAAGIgRARg");
  this.shape_102.setTransform(290.75, 10.875);
  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_103.setTransform(285.2, 11.25);
  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_104.setTransform(279.6, 11.2281);
  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_105.setTransform(274.375, 11.225);
  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_106.setTransform(269.05, 11.25);
  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_107.setTransform(263.45, 11.2281);
  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#0C593C").s().p("AAcAgIgQggIgHAJIAAAXIgIAAIAAgXIgHgJIgQAgIgLAAIAUgmIgTgZIAKAAIAXAeIAAgeIAIAAIAAAeIAWgeIALAAIgUAZIAUAmg");
  this.shape_108.setTransform(256.825, 11.25);
  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#0C593C").s().p("AAZA1IAAgUIgxAAIAAAUIgJAAIAAgcIAGAAQAEgHACgIIADgRIAAgXIAAgWIAtAAIAABNIAHAAIAAAcgAgIgVQAAAPgCALQgCALgFAJIAiAAIAAhFIgZAAg");
  this.shape_109.setTransform(249.475, 11.125);
  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#0C593C").s().p("AgXAmQgHgHAAgMQAAgGACgFQACgFAEgDIAKgGIgGgJQgDgFAAgFQAAgFACgEQACgEAEgDQAEgCAFAAQAHAAAFAEQAFAFAAAIQAAAFgCAEIgGAHIgGAGIAQAXIACgIIABgIIAIAAIgBAMQgCAGgDAGIALAPIgLAAIgFgHQgEAFgFACQgFACgGAAQgMAAgGgGgAgPAFIgEAGQgBAEAAAEQAAAIAEAEQAFAFAHAAQAEAAADgDIAHgFIgSgcIgHAFgAgKghQgCADAAAEQAAAEACAEIAFAHIAGgGQACgEAAgFQAAgEgCgDQgBgCgEAAQgEAAgCACg");
  this.shape_110.setTransform(242.325, 10.225);
  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_111.setTransform(235.7, 11.25);
  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgDgCQgCgDgFAAQgEAAgDADg");
  this.shape_112.setTransform(230.1, 11.2281);
  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_113.setTransform(224.875, 11.225);
  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAbIAVAAIAAgbIAJAAIAAA/g");
  this.shape_114.setTransform(219.55, 11.25);
  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_115.setTransform(213.95, 11.2281);
  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f("#0C593C").s().p("AAcAgIgQggIgHAJIAAAXIgIAAIAAgXIgHgJIgQAgIgLAAIAUgmIgTgZIAKAAIAXAeIAAgeIAIAAIAAAeIAWgeIALAAIgUAZIAUAmg");
  this.shape_116.setTransform(207.325, 11.25);
  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f("#0C593C").s().p("AAZA1IAAgUIgxAAIAAAUIgJAAIAAgcIAGAAQAEgHACgIIADgRIAAgXIAAgWIAtAAIAABNIAHAAIAAAcgAgIgVQAAAPgCALQgCALgFAJIAiAAIAAhFIgZAAg");
  this.shape_117.setTransform(199.975, 11.125);
  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f("#0C593C").s().p("AACADIAAgGIARgRIAAAJIgMALIAMAMIAAAJgAgSADIAAgGIARgRIAAAJIgMALIAMAMIAAAJg");
  this.shape_118.setTransform(193.7, 10.875);
  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f("#0C593C").s().p("AgOAqQgGgEgDgGQgCgHgBgIIgBgRIABgOQABgIACgHQADgHAGgEQAGgEAIAAQAKAAAFAEQAGAEADAHQACAHACAIIAAAOIAAARQgCAIgCAHQgDAGgGAEQgFADgKAAQgIAAgGgDgAgKgfQgEAFgCAHQgCAJABAJQgBALACAJQABAJAEAEQAEAFAHgBQAIABAEgFQAEgEACgJIABgUQgBgJgBgJQgCgHgEgFQgDgEgIgBQgGABgEAEg");
  this.shape_119.setTransform(184.8, 10.15);
  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f("#0C593C").s().p("AgOAqQgFgEgDgGQgEgHgBgIIgBgRIABgOQABgIAEgHQADgHAFgEQAGgEAIAAQAJAAAGAEQAGAEADAHQADAHAAAIIABAOIgBARQAAAIgDAHQgDAGgGAEQgGADgJAAQgIAAgGgDgAgLgfQgDAFgCAHQgBAJgBAJQABALABAJQABAJAEAEQAEAFAHgBQAIABAEgFQAEgEABgJIABgUQAAgJgBgJQgBgHgEgFQgFgEgHgBQgHABgEAEg");
  this.shape_120.setTransform(178, 10.15);
  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f("#0C593C").s().p("AgOAqQgGgEgDgGQgCgHgBgIIgBgRIABgOQABgIACgHQADgHAGgEQAGgEAIAAQAJAAAGAEQAGAEADAHQADAHABAIIABAOIgBARQgBAIgDAHQgDAGgGAEQgGADgJAAQgIAAgGgDgAgLgfQgEAFgBAHQgBAJAAAJQAAALABAJQABAJAEAEQAEAFAHgBQAIABAEgFQAEgEACgJIABgUQgBgJgBgJQgCgHgEgFQgDgEgIgBQgGABgFAEg");
  this.shape_121.setTransform(171.2, 10.15);
  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACADAAAFQAAAGgDAFQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgCQADgDgBgGQAAgFgCgDQgDgDgFAAIgKAAgAgKgEIAKAAQAEgBADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_122.setTransform(162.625, 11.25);
  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f("#0C593C").s().p("AgEAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_123.setTransform(157.7, 11.25);
  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_124.setTransform(153.075, 11.225);
  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f("#0C593C").s().p("AASApIAAgSIgjAAIAAASIgJAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_125.setTransform(147.65, 12.125);
  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_126.setTransform(142.275, 11.2281);
  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_127.setTransform(137.105, 12.275);
  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_128.setTransform(131.775, 11.225);
  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f("#0C593C").s().p("AAPAgIgPgbIgOAbIgKAAIAUggIgSgfIAJAAIAOAZIANgZIAKAAIgTAfIAUAgg");
  this.shape_129.setTransform(124.025, 11.25);
  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f("#0C593C").s().p("AAUAgIAAg/IAJAAIAAA/gAgcAgIAAg/IAJAAIAAAbIAMAAQAFgBADADQAEACADAEQACAEAAAGQAAAIgFAFQgFAFgHAAgAgTAYIAJAAQAHAAACgCQABgDABgGQgBgFgBgDQgDgDgFAAIgKAAg");
  this.shape_130.setTransform(117.85, 11.25);
  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_131.setTransform(111.4, 11.25);
  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_132.setTransform(105.85, 11.25);
  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_133.setTransform(100.525, 11.2281);
  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACADAAAFQAAAGgDAFQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgCQADgDgBgGQAAgFgCgDQgDgDgFAAIgKAAgAgKgEIAKAAQAEgBADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_134.setTransform(95.525, 11.25);
  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f("#0C593C").s().p("AgDAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_135.setTransform(90.6, 11.25);
  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_136.setTransform(85.975, 11.225);
  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_137.setTransform(80.755, 12.275);
  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFQAAgFgDgDQgBgCgFAAQgFAAgCADQgCADAAAFIgIAAQgBgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQACADAAAFIAAAlIABADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgGQgCAEgEADQgDADgFAAQgIAAgEgFgAABABIgGADQgDACgCADQgCACAAAFQAAAEACADQADADAEAAQADAAADgCIAEgFIABgGIAAgPIgHADg");
  this.shape_138.setTransform(75.45, 11.225);
  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_139.setTransform(70.625, 11.25);
  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_140.setTransform(65.225, 11.2281);
  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_141.setTransform(59.575, 11.275);
  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_142.setTransform(51.875, 11.2281);
  this.shape_143 = new cjs.Shape();
  this.shape_143.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_143.setTransform(47.125, 11.25);
  this.shape_144 = new cjs.Shape();
  this.shape_144.graphics.f("#0C593C").s().p("AAMArIAAgwIAAgEIABgEIAAAAIgBADIAAADIgBACIgUAwIgLAAIAAhAIAJAAIAAAwIgBAEIAAADIAAABIAAgBIABgEIABgDIAUgwIALAAIAABAgAgJgfQgEgDAAgIIAEAAQABAFADACQACACADAAQAEAAADgCQACgCABgFIAFAAQgBAIgEADQgEAEgGAAQgFAAgEgEg");
  this.shape_144.setTransform(41.375, 10.2);
  this.shape_145 = new cjs.Shape();
  this.shape_145.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_145.setTransform(35.975, 11.2281);
  this.shape_146 = new cjs.Shape();
  this.shape_146.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_146.setTransform(30.7, 11.25);
  this.shape_147 = new cjs.Shape();
  this.shape_147.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_147.setTransform(25.025, 11.25);
  this.shape_148 = new cjs.Shape();
  this.shape_148.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_148.setTransform(19.025, 11.275);
  this.shape_149 = new cjs.Shape();
  this.shape_149.graphics.f("#0C593C").s().p("AgXArIAAhVIAWAAQALAAAGAGQAGAGAAAJQAAAIgDAFQgEAFgFABQAEABADACQADACACAFQACAEAAAHQABAMgHAGQgHAGgLAAgAgOAjIAOAAQAHAAAEgEQADgEAAgJQABgIgFgEQgEgEgHAAIgNAAgAgOgFIAMAAQAGAAAEgEQAEgDAAgIQAAgHgEgDQgEgEgFAAIgNAAg");
  this.shape_149.setTransform(10.9, 10.125);
  this.shape_150 = new cjs.Shape();
  this.shape_150.graphics.f("#0C593C").s().p("AAAAFIgHAMIgFgEIAIgLIgNgDIACgGIANAGIAAgPIAFAAIAAAOIANgFIACAGIgNADIAIALIgEAEg");
  this.shape_150.setTransform(4.875, 7.5);
  this.shape_151 = new cjs.Shape();
  this.shape_151.graphics.f("#0C593C").s().p("AAbA0IAAhBIAAgKIABgNIgBAAIgXBYIgIAAIgWhYIgBAAIABANIAAAKIAABBIgKAAIAAhnIAPAAIAVBUIAWhUIAPAAIAABng");
  this.shape_151.setTransform(289.65, 50.575);
  this.shape_152 = new cjs.Shape();
  this.shape_152.graphics.f("#0C593C").s().p("AgTA0IAAhnIAnAAIAAALIgcAAIAAAhIAZAAIAAAKIgZAAIAAAmIAcAAIAAALg");
  this.shape_152.setTransform(282.05, 50.575);
  this.shape_153 = new cjs.Shape();
  this.shape_153.graphics.f("#0C593C").s().p("AATA0IAAg8IAAgNIAAgLIAAAAIgiBUIgNAAIAAhnIALAAIAAA8IAAALIgBAMIABAAIAhhTIANAAIAABng");
  this.shape_153.setTransform(274.975, 50.575);
  this.shape_154 = new cjs.Shape();
  this.shape_154.graphics.f("#0C593C").s().p("AAPA0IAAgxIgdAAIAAAxIgMAAIAAhnIAMAAIAAAsIAdAAIAAgsIALAAIAABng");
  this.shape_154.setTransform(267.2, 50.575);
  this.shape_155 = new cjs.Shape();
  this.shape_155.graphics.f("#0C593C").s().p("AgSA0IAAhnIAlAAIAAALIgbAAIAAAhIAZAAIAAAKIgZAAIAAAmIAbAAIAAALg");
  this.shape_155.setTransform(260.7, 50.575);
  this.shape_156 = new cjs.Shape();
  this.shape_156.graphics.f("#0C593C").s().p("AAQA0IAAgxIgfAAIAAAxIgLAAIAAhnIALAAIAAAsIAfAAIAAgsIALAAIAABng");
  this.shape_156.setTransform(253.85, 50.575);
  this.shape_157 = new cjs.Shape();
  this.shape_157.graphics.f("#0C593C").s().p("AgTA0IAAhnIAnAAIAAALIgcAAIAAAhIAZAAIAAAKIgZAAIAAAmIAcAAIAAALg");
  this.shape_157.setTransform(247.4, 50.575);
  this.shape_158 = new cjs.Shape();
  this.shape_158.graphics.f("#0C593C").s().p("AAbA0IAAhBIAAgKIAAgNIAAAAIgWBYIgJAAIgXhYIAAAAIAAANIABAKIAABBIgKAAIAAhnIAPAAIAVBUIAWhUIAPAAIAABng");
  this.shape_158.setTransform(239.45, 50.575);
  this.shape_159 = new cjs.Shape();
  this.shape_159.graphics.f("#0C593C").s().p("AATA0IAAg8IAAgNIAAgLIAAAAIgiBUIgNAAIAAhnIALAAIAAA8IAAALIgBAMIABAAIAhhTIANAAIAABng");
  this.shape_159.setTransform(230.575, 50.575);
  this.shape_160 = new cjs.Shape();
  this.shape_160.graphics.f("#0C593C").s().p("AgWA0IAAhnIATAAQANAAAGAIQAHAHAAAQQAAAPgHAIQgGAJgOAAIgHAAIAAAogAgLABIAGAAQAIAAAEgEQAFgFAAgMQAAgLgEgEQgEgFgIAAIgHAAg");
  this.shape_160.setTransform(223.675, 50.575);
  this.shape_161 = new cjs.Shape();
  this.shape_161.graphics.f("#0C593C").s().p("AAPA0IAAhcIgdAAIAABcIgLAAIAAhnIAzAAIAABng");
  this.shape_161.setTransform(216.425, 50.575);
  this.shape_162 = new cjs.Shape();
  this.shape_162.graphics.f("#0C593C").s().p("AAXBCIAAgcIgtAAIAAAcIgKAAIAAgnIAGAAQAHgWAEgWQAEgXABgZIAiAAIAABcIAJAAIAAAngAgDgaIgFAbIgHAaIAdAAIAAhRIgPAAIgCAcg");
  this.shape_162.setTransform(206.125, 51.975);
  this.shape_163 = new cjs.Shape();
  this.shape_163.graphics.f("#0C593C").s().p("AgSA0IAAhnIAlAAIAAALIgbAAIAAAhIAZAAIAAAKIgZAAIAAAmIAbAAIAAALg");
  this.shape_163.setTransform(199.85, 50.575);
  this.shape_164 = new cjs.Shape();
  this.shape_164.graphics.f("#0C593C").s().p("AgWA0IAAhnIATAAQANAAAGAIQAHAHAAAQQAAAPgHAIQgGAJgOAAIgHAAIAAAogAgLABIAGAAQAIAAAEgEQAFgFAAgMQAAgLgEgEQgEgFgIAAIgHAAg");
  this.shape_164.setTransform(193.925, 50.575);
  this.shape_165 = new cjs.Shape();
  this.shape_165.graphics.f("#0C593C").s().p("AgTA0IAAhnIAmAAIAAALIgbAAIAAAhIAZAAIAAAKIgZAAIAAAmIAbAAIAAALg");
  this.shape_165.setTransform(187.8, 50.575);
  this.shape_166 = new cjs.Shape();
  this.shape_166.graphics.f("#0C593C").s().p("AAPA0IAAhcIgdAAIAABcIgLAAIAAhnIAzAAIAABng");
  this.shape_166.setTransform(180.875, 50.575);
  this.shape_167 = new cjs.Shape();
  this.shape_167.graphics.f("#0C593C").s().p("AgEAHQgCgCAAgFQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAFgCACQgCADgDAAQgCAAgCgDg");
  this.shape_167.setTransform(172.6, 55);
  this.shape_168 = new cjs.Shape();
  this.shape_168.graphics.f("#0C593C").s().p("AAPA0IAAgrIgLAAIgRArIgMAAIAUguQgHgDgEgGQgEgHABgLQAAgeAaAAIATAAIAABngAgFgkQgDAFAAAKQAAAUAOAAIAJAAIAAgnIgIAAQgHAAgFAEg");
  this.shape_168.setTransform(167.35, 50.575);
  this.shape_169 = new cjs.Shape();
  this.shape_169.graphics.f("#0C593C").s().p("AATA0IAAg8IAAgNIAAgLIAAAAIgiBUIgNAAIAAhnIALAAIAAA8IAAALIgBAMIABAAIAhhTIANAAIAABng");
  this.shape_169.setTransform(160.425, 50.575);
  this.shape_170 = new cjs.Shape();
  this.shape_170.graphics.f("#0C593C").s().p("AAPA0IAAgxIgdAAIAAAxIgLAAIAAhnIALAAIAAAsIAdAAIAAgsIAMAAIAABng");
  this.shape_170.setTransform(152.65, 50.575);
  this.shape_171 = new cjs.Shape();
  this.shape_171.graphics.f("#0C593C").s().p("AATA0IgHggIgXAAIgHAgIgMAAIAZhnIALAAIAZBngAAAggIgCAIIgHAgIATAAIgIggIgBgIIgBgHIAAAHg");
  this.shape_171.setTransform(145.575, 50.575);
  this.shape_172 = new cjs.Shape();
  this.shape_172.graphics.f("#0C593C").s().p("AgOA1IgJgEIAAgMQAEADAFABIALACQAQAAAAgUQAAgKgFgFQgGgEgIAAIgJAAIAAgKIAIAAQATAAgBgUQABgIgEgEQgEgEgFAAQgFAAgEACIgHAGIgFgJQAEgFAGgCQAGgDAGAAQAKAAAHAHQAFAHABAMQAAAKgFAHQgFAGgHADIAAAAQAJABAEAGQAFAHAAAKQAAAOgHAIQgHAJgNAAIgLgBg");
  this.shape_172.setTransform(139.1, 50.575);
  this.shape_173 = new cjs.Shape();
  this.shape_173.graphics.f("#0C593C").s().p("AATA0IgHggIgXAAIgHAgIgMAAIAZhnIALAAIAZBngAAAggIgCAIIgHAgIATAAIgIggIgBgIIgBgHIAAAHg");
  this.shape_173.setTransform(132.875, 50.575);
  this.shape_174 = new cjs.Shape();
  this.shape_174.graphics.f("#0C593C").s().p("AANA0Igag0IAAA0IgLAAIAAhnIALAAIAAAyIAagyIALAAIgbAyIAcA1g");
  this.shape_174.setTransform(127, 50.575);
  this.shape_175 = new cjs.Shape();
  this.shape_175.graphics.f("#0C593C").s().p("AgRAvQgHgIgDgMQgDgMAAgPQAAgZAIgOQAIgOAOAAQALAAAGAHQAIAHADAMQADANAAAOQAAAPgDAMQgDANgIAHQgGAHgLAAQgKAAgHgHgAgOgfQgFALAAAUQAAAVAFAKQAFALAJAAQAKAAAFgKQAFgLgBgVQABgUgFgLQgFgKgKAAQgJAAgFAKg");
  this.shape_175.setTransform(119.4, 50.575);
  this.shape_176 = new cjs.Shape();
  this.shape_176.graphics.f("#0C593C").s().p("AAPA0IAAhcIgdAAIAABcIgLAAIAAhnIAzAAIAABng");
  this.shape_176.setTransform(111.625, 50.575);
  this.shape_177 = new cjs.Shape();
  this.shape_177.graphics.f("#0C593C").s().p("AgRAvQgGgIgEgMQgDgMAAgPQAAgZAIgOQAHgOAPAAQALAAAGAHQAIAHADAMQADANAAAOQAAAPgDAMQgDANgIAHQgGAHgLAAQgKAAgHgHgAgOgfQgFALAAAUQAAAVAFAKQAFALAJAAQAKAAAFgKQAFgLAAgVQAAgUgFgLQgFgKgKAAQgJAAgFAKg");
  this.shape_177.setTransform(103.95, 50.575);
  this.shape_178 = new cjs.Shape();
  this.shape_178.graphics.f("#0C593C").s().p("AgYA0IAAhnIAVAAQAMAAAHAGQAHAGAAANQAAAKgEAGQgDAGgHACIAAABQAIABAEAFQAEAGAAALQAAAOgHAIQgGAIgMAAgAgNApIANAAQAGAAAEgFQADgFAAgJQAAgJgEgFQgDgFgHAAIgMAAgAgNgHIALAAQAHAAADgEQADgFAAgJQAAgPgOAAIgKAAg");
  this.shape_178.setTransform(96.875, 50.575);
  this.shape_179 = new cjs.Shape();
  this.shape_179.graphics.f("#0C593C").s().p("AATA0IAAg8IAAgNIAAgLIAAAAIgiBUIgNAAIAAhnIALAAIAAA8IAAALIgBAMIABAAIAhhTIANAAIAABng");
  this.shape_179.setTransform(89.275, 50.575);
  this.shape_180 = new cjs.Shape();
  this.shape_180.graphics.f("#0C593C").s().p("AgEA0IAAhcIgUAAIAAgLIAxAAIAAALIgUAAIAABcg");
  this.shape_180.setTransform(82.45, 50.575);
  this.shape_181 = new cjs.Shape();
  this.shape_181.graphics.f("#0C593C").s().p("AgRAvQgHgIgDgMQgDgMAAgPQAAgZAIgOQAIgOAOAAQALAAAGAHQAIAHADAMQADANAAAOQAAAPgDAMQgDANgIAHQgGAHgLAAQgKAAgHgHgAgOgfQgFALAAAUQAAAVAFAKQAFALAJAAQAKAAAFgKQAFgLgBgVQABgUgFgLQgFgKgKAAQgJAAgFAKg");
  this.shape_181.setTransform(75.75, 50.575);
  this.shape_182 = new cjs.Shape();
  this.shape_182.graphics.f("#0C593C").s().p("AgWA0IAAhnIATAAQANAAAGAIQAHAHAAAQQAAAPgHAIQgGAJgOAAIgHAAIAAAogAgLABIAGAAQAIAAAEgEQAFgFAAgMQAAgLgEgEQgEgFgIAAIgHAAg");
  this.shape_182.setTransform(68.925, 50.575);
  this.shape_183 = new cjs.Shape();
  this.shape_183.graphics.f("#0C593C").s().p("AAPA0IAAhcIgdAAIAABcIgLAAIAAhnIAzAAIAABng");
  this.shape_183.setTransform(61.675, 50.575);
  this.shape_184 = new cjs.Shape();
  this.shape_184.graphics.f("#0C593C").s().p("AAPA0IAAgrIgLAAIgRArIgLAAIATguQgHgDgEgGQgEgHAAgLQAAgeAaAAIATAAIAABngAgFgkQgDAFAAAKQAAAUAOAAIAIAAIAAgnIgHAAQgIAAgEAEg");
  this.shape_184.setTransform(51.4, 50.575);
  this.shape_185 = new cjs.Shape();
  this.shape_185.graphics.f("#0C593C").s().p("AgQAnQgJgOABgZQgBgOAEgMQADgNAIgHQAHgHAKAAQALAAAHAGIgDAKIgHgDQgEgCgEAAQgHAAgEAGQgEAGgDAKQgDAJABALQgBAUAHALQAFALAJAAIAIgBIAIgDIAAAMQgHAEgKAAQgOAAgIgPg");
  this.shape_185.setTransform(45.45, 50.575);
  this.shape_186 = new cjs.Shape();
  this.shape_186.graphics.f("#0C593C").s().p("AgEA0IAAhcIgUAAIAAgLIAxAAIAAALIgUAAIAABcg");
  this.shape_186.setTransform(39.25, 50.575);
  this.shape_187 = new cjs.Shape();
  this.shape_187.graphics.f("#0C593C").s().p("AgHApQgIgNgBgZIgOAAIAAAxIgLAAIAAhnIALAAIAAAsIAOAAQABgWAIgMQAHgMANAAQAOAAAIAOQAHAOAAAZQAAAPgDAMQgDANgHAHQgGAHgKAAQgNAAgHgNgAAAgeQgFAKAAAUQAAAVAFAKQAEALAIAAQAKAAAFgKQAEgLAAgVQAAgUgEgLQgFgKgJAAQgJAAgEALg");
  this.shape_187.setTransform(31.45, 50.575);
  this.shape_188 = new cjs.Shape();
  this.shape_188.graphics.f("#0C593C").s().p("AgSA0IAAhnIAlAAIAAALIgbAAIAAAhIAZAAIAAAKIgZAAIAAAmIAbAAIAAALg");
  this.shape_188.setTransform(23.45, 50.575);
  this.shape_189 = new cjs.Shape();
  this.shape_189.graphics.f("#0C593C").s().p("AAbA0IAAhBIAAgKIABgNIgBAAIgXBYIgIAAIgWhYIgBAAIABANIAAAKIAABBIgKAAIAAhnIAPAAIAVBUIAWhUIAQAAIAABng");
  this.shape_189.setTransform(15.5, 50.575);
  this.shape_190 = new cjs.Shape();
  this.shape_190.graphics.f("#0C593C").s().p("AATA0IAAg8IAAgNIAAgLIAAAAIgiBUIgNAAIAAhnIALAAIAAA8IAAALIgBAMIABAAIAhhTIANAAIAABng");
  this.shape_190.setTransform(6.625, 50.575);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.l3, new cjs.Rectangle(0, 1, 317.6, 79.9), null);
 (lib.l2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AgEAGIAAgLIAJAAIAAALg");
  this.shape.setTransform(259.55, 25.875);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AAUAgIAAg4IgBAAIgQA4IgFAAIgQg4IgBAAIAAA4IgIAAIAAg/IAOAAIALApIACAGIAAAHIABgGIABgHIAMgpIAOAAIAAA/g");
  this.shape_1.setTransform(254.7, 23.25);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_2.setTransform(248.675, 23.2281);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgEIABgFIAAAAIgBADIAAAEIgBACIgUAvIgLAAIAAg/IAJAAIAAAwIgBADIAAADIAAACIAAgCIABgDIABgDIAUgwIALAAIAAA/g");
  this.shape_3.setTransform(243.325, 23.25);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_4.setTransform(237.75, 23.25);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFQAAgFgCgDQgDgCgEAAQgFAAgCADQgCADAAAFIgIAAQgBgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQABADABAFIAAAlIABADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgGQgCAEgEADQgDADgFAAQgIAAgEgFgAAAABIgFADQgDACgCADQgBACAAAFQgBAEACADQADADAEAAQAEAAACgCQADgCABgDIABgGIAAgPIgIADg");
  this.shape_5.setTransform(232.6, 23.225);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACAEAAAEQAAAHgDADQgCAEgFACQAGAAADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGgBACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEABADgDQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_6.setTransform(227.575, 23.25);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_7.setTransform(222.1, 23.2281);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_8.setTransform(216.775, 23.2271);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAEgBIADgCIADgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgJAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCQACgCACgDIAAgGIAAgPIgHADg");
  this.shape_9.setTransform(212.1, 23.225);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_10.setTransform(206.905, 24.275);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgNAoQgEgFgDgIQgCgJAAgMQAAgNACgJQADgJAEgEQAFgGAHgBIAIgDQAFgCAAgCIAIAAQgCAGgFADQgEAEgHABQgHABgDAGQgFAEAAAJQACgFAFgDQAEgCADAAQALAAAFAIQAFAIABANQAAASgFAIQgGAIgMAAQgIAAgFgEgAgGgJQgDAEgCAEQgBAEgBAHQAAAOADAGQAEAGAGAAQAHAAAEgGQACgGAAgOQABgGgCgEQgBgGgEgDQgDgCgEAAQgDAAgDACg");
  this.shape_11.setTransform(201.25, 22.2);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIACANQABAGACADQADADAFAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgDgDgFAAQgEAAgDADg");
  this.shape_12.setTransform(195.7, 23.2281);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_13.setTransform(190.15, 23.2281);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_14.setTransform(184.825, 23.2271);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAFgBIACgCIADgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgJAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADABAFIAAAlIAAADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCQACgCACgDIAAgGIAAgPIgHADg");
  this.shape_15.setTransform(180.15, 23.225);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AgQAgIAAg/IAhAAIAAAHIgYAAIAAA4g");
  this.shape_16.setTransform(175.825, 23.25);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AATAgIAAg4IAAAAIgQA4IgFAAIgQg4IAAAAIAAA4IgJAAIAAg/IAOAAIAMApIABAGIAAAHIABgGIABgHIAMgpIAOAAIAAA/g");
  this.shape_17.setTransform(167.25, 23.25);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AAUAgIAAg/IAJAAIAAA/gAgcAgIAAg/IAJAAIAAAaIANAAQAEABADACQAEACADAEQACAEAAAGQAAAIgFAFQgFAFgGAAgAgTAZIAJAAQAHgBACgDQABgCABgGQgBgFgBgDQgDgDgFAAIgKAAg");
  this.shape_18.setTransform(160.05, 23.25);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAaIAWAAIAAgaIAJAAIAAA/g");
  this.shape_19.setTransform(153.65, 23.25);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgJAAIAAg/IAJAAIAAAaIAWAAIAAgaIAKAAIAAA/g");
  this.shape_20.setTransform(148.15, 23.25);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_21.setTransform(142.875, 23.2281);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AghAgIAAg/IAIAAIAAA4IAVAAIAAg4IAIAAIAAA4IAWAAIAAg4IAJAAIAAA/g");
  this.shape_22.setTransform(136.2, 23.25);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AAVAgIAAg/IAJAAIAAA/gAgdAgIAAg/IAJAAIAAAaIAOAAQAEABAEACQAEACACAEQACAEAAAGQAAAIgFAFQgFAFgGAAgAgUAZIAKAAQAGgBADgDQACgCAAgGQAAgFgCgDQgCgDgHAAIgKAAg");
  this.shape_23.setTransform(128.35, 23.25);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACAEAAAEQAAAHgDADQgCAEgFACQAGAAADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGgBACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEABADgDQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_24.setTransform(122.225, 23.25);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_25.setTransform(116.75, 23.2281);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AALAgIAAg4IgWAAIAAA4IgJAAIAAg/IApAAIAAA/g");
  this.shape_26.setTransform(111.25, 23.25);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AAMArIAAgwIAAgEIABgEIAAAAIgBADIAAADIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAEIAAADIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/gAgJgeQgEgEAAgIIAEAAQABAFADACQACACADgBQAEABADgCQACgCABgFIAFAAQgBAIgEAEQgEADgGAAQgFAAgEgDg");
  this.shape_27.setTransform(102.975, 22.2);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgDgCQgCgDgFAAQgEAAgDADg");
  this.shape_28.setTransform(97.35, 23.2281);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_29.setTransform(91.85, 23.25);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AALAgIAAgeIgVAAIAAAeIgJAAIAAg/IAJAAIAAAaIAVAAIAAgaIAJAAIAAA/g");
  this.shape_30.setTransform(86.35, 23.25);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAFgBIACgCIADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIABgFQgBgFgCgDQgCgCgEAAQgFAAgCADQgCADgBAFIgHAAQgBgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQACADAAAFIAAAlIABADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgGQgCAEgEADQgDADgFAAQgIAAgEgFgAABABIgGADQgDACgCADQgCACAAAFQAAAEACADQACADAFAAQADAAADgCQACgCABgDIACgGIAAgPIgHADg");
  this.shape_31.setTransform(81.2, 23.225);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACAEAAAEQAAAHgDADQgCAEgFACQAGAAADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGgBACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEABADgDQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_32.setTransform(76.175, 23.25);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_33.setTransform(70.925, 23.2271);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#0C593C").s().p("AAUAgIAAg/IAJAAIAAA/gAgcAgIAAg/IAJAAIAAAaIAMAAQAGABACACQAEACADAEQACAEAAAGQAAAIgFAFQgFAFgHAAgAgTAZIAJAAQAHgBACgDQACgCgBgGQABgFgCgDQgDgDgFAAIgKAAg");
  this.shape_34.setTransform(64.95, 23.25);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEABACAEQACAEAAAEQAAAHgDADQgCAEgFACQAGAAADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAZIAKAAQAGgBACgDQADgCgBgGQAAgGgCgCQgDgDgFAAIgKAAgAgKgFIAKAAQAEABADgDQACgCAAgGQAAgEgCgCQgDgCgEgBIgKAAg");
  this.shape_35.setTransform(58.825, 23.25);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#0C593C").s().p("AgEAJQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIABgEIgFAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_36.setTransform(52.15, 26.725);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgEIABgFIAAAAIgBADIAAAEIgBACIgUAvIgLAAIAAg/IAJAAIAAAwIgBADIAAADIAAACIAAgCIABgDIABgDIAUgwIALAAIAAA/g");
  this.shape_37.setTransform(47.975, 23.25);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_38.setTransform(42.025, 23.275);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIAAANQACAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_39.setTransform(36.8, 23.2281);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#0C593C").s().p("AgYArIAAhVIAqAAIAAAIIggAAIAAAdIAMAAQAGAAAGACQAHACADAEQAFAGAAAKQgBAIgDAGQgDAFgGADQgGACgGAAgAgOAjIALAAQAFAAAEgCQAEgBACgEQADgDAAgGQAAgHgDgEQgCgDgFgCIgLgBIgIAAg");
  this.shape_40.setTransform(31.1, 22.125);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#0C593C").s().p("AAAAGIgHAKIgFgCIAIgMIgNgDIACgGIANAGIAAgPIAFAAIAAAOIANgFIACAGIgNADIAIAMIgEADg");
  this.shape_41.setTransform(25.125, 19.5);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.l2, new cjs.Rectangle(0, 13, 283, 18), null);
 (lib.l1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgEIABgDIAAAAIgBADIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape.setTransform(195.175, 23.2);
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#0C593C").s().p("AgVAgIgCAAIAAgIIABABIADAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgHIAAgQIAAgfIAlAAIAAA/IgJAAIAAg4IgTAAIAAAZQAAAJgBAHQgBAHgDAEQgDAEgGAAIgDAAg");
  this.shape_1.setTransform(189.175, 23.225);
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgEgDgEAAQgEAAgDADg");
  this.shape_2.setTransform(183.9, 23.1781);
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#0C593C").s().p("AgNAoQgEgFgDgIQgCgJAAgMQAAgNACgJQADgIAEgGQAFgEAHgCIAIgDQAFgBAAgDIAIAAQgCAHgFADQgEADgHABQgHACgDAEQgFAFAAAJQACgFAFgCQAEgDADAAQALAAAFAIQAFAIABAOQAAAQgFAJQgGAIgMAAQgIAAgFgEgAgGgIQgDADgCAEQgBAEgBAIQAAANADAGQAEAHAGAAQAHAAAEgHQACgGAAgNQABgHgCgEQgBgFgEgDQgDgEgEAAQgDAAgDAEg");
  this.shape_3.setTransform(178.3, 22.15);
  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgEIABgDIAAAAIgBADIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_4.setTransform(169.925, 23.2);
  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgEIABgDIAAAAIgBADIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_5.setTransform(161.475, 23.2);
  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#0C593C").s().p("AAMAgIAAgwIAAgEIABgDIAAAAIgBADIAAACIgBACIgUAwIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_6.setTransform(155.725, 23.2);
  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#0C593C").s().p("AALAgIAAgeIgWAAIAAAeIgIAAIAAg/IAIAAIAAAbIAWAAIAAgbIAKAAIAAA/g");
  this.shape_7.setTransform(150.1, 23.2);
  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQAAgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgBAEgEADQgDADgEAAQgJAAgEgFgAABABIgGADQgDACgCADQgBACgBAFQAAAEACADQACADAFAAQADAAADgCQADgCAAgDIABgGIAAgPIgGADg");
  this.shape_8.setTransform(144.9, 23.175);
  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACAEAAAEQAAAGgDAFQgCADgFABQAGABADAEQADAEAAAHQAAAFgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGABACgDQADgDgBgGQAAgFgCgDQgDgDgFAAIgKAAgAgKgEIAKAAQAEAAADgDQACgCAAgFQAAgFgCgCQgDgCgEAAIgKAAg");
  this.shape_9.setTransform(139.825, 23.2);
  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDABgGIABgNQABgJgCgGQgCgGgCgCQgDgDgFAAQgEAAgDADg");
  this.shape_10.setTransform(134.3, 23.1781);
  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_11.setTransform(128.925, 23.1771);
  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQAAgJAFgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgBAEgEADQgDADgEAAQgJAAgEgFgAABABIgGADQgDACgCADQgBACgBAFQAAAEACADQACADAFAAQADAAADgCQADgCAAgDIABgGIAAgPIgGADg");
  this.shape_12.setTransform(124.2, 23.175);
  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_13.setTransform(118.955, 24.225);
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#0C593C").s().p("AgNAoQgFgFgCgIQgCgJAAgMQAAgNADgJQACgIAEgGQAFgEAHgCIAJgDQAEgBAAgDIAHAAQgBAHgFADQgEADgHABQgHACgDAEQgFAFAAAJQADgFADgCQAEgDAEAAQALAAAFAIQAGAIAAAOQAAAQgFAJQgGAIgMAAQgHAAgGgEgAgHgIQgCADgCAEQgCAEAAAIQAAANAEAGQADAHAGAAQAHAAADgHQADgGAAgNQAAgHgBgEQgBgFgDgDQgEgEgEAAQgEAAgDAEg");
  this.shape_14.setTransform(113.25, 22.15);
  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAGgJQAFgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGgBAJIABANQACAGADADQADADAEAAQAGAAACgDQADgDACgGIAAgNQABgJgCgGQgBgGgEgCQgDgDgEAAQgEAAgDADg");
  this.shape_15.setTransform(107.65, 23.1781);
  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIAAANQACAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_16.setTransform(102.05, 23.1781);
  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_17.setTransform(96.675, 23.1771);
  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAEgBIADgCIADgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgFQAAgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgJAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADAAAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIAEgFIAAgGIAAgPIgHADg");
  this.shape_18.setTransform(91.95, 23.175);
  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#0C593C").s().p("AgQAgIAAg/IAhAAIAAAIIgYAAIAAA3g");
  this.shape_19.setTransform(87.575, 23.2);
  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#0C593C").s().p("AgEAJQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIAAgEIABgEIgFAAIAAgLIAJAAIAAANQAAAEgDAEQgCAEgEACg");
  this.shape_20.setTransform(244.65, 14.725);
  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_21.setTransform(240.425, 11.25);
  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_22.setTransform(234.675, 11.25);
  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#0C593C").s().p("AgEAgIAAg3IgRAAIAAgIIArAAIAAAIIgSAAIAAA3g");
  this.shape_23.setTransform(229.6, 11.25);
  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#0C593C").s().p("AgVAqIAAgJIADACIAEAAQAEAAADgEIAEgJIgUhAIAJAAIAOAyIAPgyIAJAAIgUA/IgEALQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_24.setTransform(225.025, 12.35);
  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#0C593C").s().p("AASApIAAgSIgjAAIAAASIgJAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_25.setTransform(219.65, 12.125);
  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_26.setTransform(214.225, 11.2271);
  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACADAAAFQAAAGgDAFQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgCQADgDgBgGQAAgFgCgDQgDgDgFAAIgKAAgAgKgEIAKAAQAEgBADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_27.setTransform(209.425, 11.25);
  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_28.setTransform(201.125, 11.25);
  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_29.setTransform(195.605, 12.275);
  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#0C593C").s().p("AALAgIAAg3IgVAAIAAA3IgJAAIAAg/IAnAAIAAA/g");
  this.shape_30.setTransform(189.95, 11.25);
  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#0C593C").s().p("AgDAgIAAg3IgSAAIAAgIIArAAIAAAIIgSAAIAAA3g");
  this.shape_31.setTransform(182.25, 11.25);
  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_32.setTransform(177.405, 12.275);
  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGABAJIABANQABAGACADQAEADAEAAQAFAAADgDQADgDACgGIABgNQgBgJgBgGQgCgGgDgCQgDgDgEAAQgEAAgDADg");
  this.shape_33.setTransform(171.7, 11.2281);
  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#0C593C").s().p("AgEA2IAAgcIgFAGQgDACgFAAQgJAAgEgFQgFgFgBgIQgCgIAAgIQAAgJACgHQACgIAFgEQAEgEAIgBQAEAAAEADQADACACAEIAAgdIAJAAIAAAdQACgEADgCQAEgDAEAAQAIABAEAEQAFAEACAIQACAHAAAJQAAAIgCAIQgCAIgEAFQgFAFgIAAQgFAAgDgCIgFgGIAAAcgAAKgWIgEAGIgBAIIAAAIQgBAGABAGQABAGADAEQACAEAGAAQAHAAADgHQACgHAAgMIAAgHQAAgFgCgEQgBgEgCgCQgDgDgEAAQgEAAgDADgAgXgWQgCACgBAEQgCAEAAAEIAAAIIAAAMQABAGADAEQACAEAGAAQAHAAADgHQADgHgBgMIAAgHIgBgJQgCgEgCgCQgDgDgEAAQgEAAgDADg");
  this.shape_34.setTransform(164.525, 11.225);
  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#0C593C").s().p("AAUAgIAAg3IgBAAIgQA3IgFAAIgQg3IgBAAIAAA3IgIAAIAAg/IAOAAIALApIACAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_35.setTransform(156.6, 11.25);
  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgGgDgCgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAGAIQAFAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgCAGAAAJIACANQABAGACADQADADAFAAQAGAAACgDQADgDABgGIABgNQAAgJgBgGQgBgGgDgCQgDgDgFAAQgEAAgDADg");
  this.shape_36.setTransform(150.25, 11.2281);
  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#0C593C").s().p("AALAgIgPggIgHAJIAAAXIgJAAIAAg/IAJAAIAAAeIAVgeIALAAIgUAZIAUAmg");
  this.shape_37.setTransform(145.225, 11.25);
  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_38.setTransform(139.925, 11.225);
  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#0C593C").s().p("AAMAgIAAgvIAAgFIABgDIAAAAIgBACIAAADIgBADIgUAvIgLAAIAAg/IAJAAIAAAvIgBAFIAAACIAAABIAAgBIABgDIABgEIAUgvIALAAIAAA/g");
  this.shape_39.setTransform(134.475, 11.25);
  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#0C593C").s().p("AASApIAAgSIgjAAIAAASIgJAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_40.setTransform(128.75, 12.125);
  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#0C593C").s().p("AAMAgIAAgbIgKAAIgMAbIgKAAIANgcQgFgCgDgEQgDgEAAgHQAAgJAFgEQAFgFAIAAIAVAAIAAA/gAgGgVQgCADgBAFQABAFACAEQACACAFAAIALAAIAAgVIgKAAQgFAAgDACg");
  this.shape_41.setTransform(120.4, 11.25);
  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#0C593C").s().p("AgJAfQgFgDgCgEQgCgFgBgGIgBgMIABgMIADgLQADgFAEgDQAFgCAFgBQAHABAEACQAEADADAFQACAFAAAGIgJAAIgBgHQgBgDgCgCQgCgCgFAAQgEAAgDAEQgDAEAAAGIgBAMIAAAIIABAJIAEAGQADACADAAQAFAAACgCQADgDAAgDIABgIIAJAAQAAAGgCAGQgCAFgEADQgEAEgHAAQgHAAgEgDg");
  this.shape_42.setTransform(115.575, 11.225);
  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#0C593C").s().p("AgEAgIAAg3IgRAAIAAgIIAqAAIAAAIIgRAAIAAA3g");
  this.shape_43.setTransform(110.8, 11.25);
  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_44.setTransform(106.075, 11.2281);
  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFABgEQACgEAEgCIAJgEIAEgBIAEgCIACgBQAAAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgFQAAgFgCgDQgCgCgEAAQgFAAgDADQgCADAAAFIgIAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQACADgBAFIAAAlIABADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgBABIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgBACAAAFQgBAEACADQADADAEAAQAEAAACgCIADgFIABgGIAAgPIgHADg");
  this.shape_45.setTransform(101.15, 11.225);
  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#0C593C").s().p("AgTAgIAAg/IAUAAQAFAAAEACQAEACACADQACADAAAFQAAAGgDAFQgCADgFABQAGABADAEQADAEAAAGQAAAGgCAEQgDAEgDACQgEACgEAAgAgKAYIAKAAQAGAAACgCQADgDgBgGQAAgFgCgDQgDgDgFAAIgKAAgAgKgEIAKAAQAEgBADgCQACgCAAgFQAAgFgCgCQgDgDgEABIgKAAg");
  this.shape_46.setTransform(96.075, 11.25);
  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#0C593C").s().p("AgJAfQgFgDgDgIQgCgHAAgNIABgLQAAgGADgFQACgFAEgDQAEgCAFgBQAHABAEADQAEADACAFQACAFABAHIAAALIgeAAIABANQABAFACADQACADAFAAQAEAAACgCQADgCAAgEIABgHIAJAAQAAAGgCAFQgCAGgEADQgEADgHAAIgBAAQgFAAgEgDgAALgEIgBgKQgBgFgCgDQgCgDgFAAQgEAAgCAEQgCADgBAFIgBAJIAVAAIAAAAg");
  this.shape_47.setTransform(90.825, 11.2281);
  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#0C593C").s().p("AATAgIAAg3IAAAAIgQA3IgFAAIgQg3IgBAAIAAA3IgIAAIAAg/IAOAAIAMApIABAGIAAAHIABgHIABgGIAMgpIAOAAIAAA/g");
  this.shape_48.setTransform(84.75, 11.25);
  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#0C593C").s().p("AgVAqIAAgJIADACIAEAAQAEAAADgEQACgEACgFIgUhAIAJAAIAOAyIAPgyIAJAAIgUA/IgEALQgBAFgEADQgDADgHAAIgGgBg");
  this.shape_49.setTransform(78.825, 12.35);
  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#0C593C").s().p("AgOAdQgFgGgBgLIAJAAQAAAIADADQADADAFAAQAFAAADgCQADgDAAgHQAAgFgCgDQgDgEgFAAIgFAAIAAgGIAEAAQAEAAADgDQADgDAAgFIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDgCgDAAQgFAAgCADQgDAEAAAEIgJAAQABgFACgEQACgEAFgDQAEgCAFgBQAFABAFACQAEACACADQADAEAAAFQAAAGgDAEQgEAEgFABIAAABIAGABQADACACADQACAEABAFQgBAJgFAFQgFAFgKAAIAAAAQgJAAgFgFg");
  this.shape_50.setTransform(73.725, 11.2271);
  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#0C593C").s().p("AgRAdQgEgEAAgJQAAgFACgEQABgEADgCIAKgEIAEgBIADgCIADgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAIABgFQgBgFgBgDQgCgCgFAAQgFAAgDADQgBADAAAFIgJAAQABgJAEgFQAFgFAJAAQAFABAEACQAEACACAEQABADABAFIAAAlIAAADQABABAAAAQAAAAABAAQAAABAAAAQABAAAAAAIABAAIABAAIAAAGIgCABIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgCgGQgCAEgDADQgDADgEAAQgJAAgEgFgAAAABIgFADQgDACgCADQgCACABAFQgBAEACADQADADAEAAQAEAAACgCIAEgFIABgGIAAgPIgIADg");
  this.shape_51.setTransform(69, 11.225);
  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#0C593C").s().p("AgVAsIAAhVIAJAAIAAAHQADgFADgCQAEgCACAAQAJAAAEAEQAFAFACAHQACAIgBAJQABAJgCAHQgCAIgEAFQgFAEgIAAQgEAAgDgCQgDgCgDgEIAAAdgAgGghQgDADgBADQgBAEAAAFIgBAJIABALQABAGACAEQADAEAFAAQAHAAACgHQADgHAAgMIAAgIIgCgIQgBgEgDgDQgCgCgEAAQgEAAgCACg");
  this.shape_52.setTransform(63.755, 12.275);
  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#0C593C").s().p("AASApIAAgSIgjAAIAAASIgJAAIAAgZIAGAAIAEgLIACgKIABgOIAAgVIAiAAIAAA4IAGAAIAAAZgAgEgOIgBAMIgCAIIgEAKIAXAAIAAgwIgQAAg");
  this.shape_53.setTransform(58, 12.125);
  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#0C593C").s().p("AAAAiQgGAAgFgDQgFgDgDgIQgDgHAAgNQAAgPAFgJQAGgIALgBQAMABAFAIQAGAJAAAPQAAANgDAIQgDAHgFADQgEADgGAAIgCAAgAgHgWQgDACgBAGQgBAGAAAJIABANQABAGACADQADADAFAAQAFAAADgDQADgDACgGIABgNQAAgJgCgGQgCgGgDgCQgCgDgFAAQgEAAgDADg");
  this.shape_54.setTransform(52.35, 11.2281);
  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#0C593C").s().p("AAQArIAAhNIggAAIAABNIgJAAIAAhVIAzAAIAABVg");
  this.shape_55.setTransform(46.15, 10.125);
  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#0C593C").s().p("AAAAFIgHAMIgFgEIAIgLIgNgDIACgGIANAGIAAgPIAFAAIAAAOIANgFIACAGIgNADIAIALIgEAEg");
  this.shape_56.setTransform(39.975, 7.5);
  this.timeline.addTween(cjs.Tween.get({}).to({
   state: [{
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
 }).prototype = getMCSymbolPrototype(lib.l1, new cjs.Rectangle(0, 1, 283, 29.9), null);
 (lib.icon03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.icon3();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.icon03, new cjs.Rectangle(0, 0, 142.8, 142.8), null);
 (lib.icon02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.icon2();
  this.instance.parent = this;
  this.instance.setTransform(0, 0, 0.667, 0.667);
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
 }).prototype = getMCSymbolPrototype(lib.icon02, new cjs.Rectangle(0, 0, 113.4, 114.7), null);
 (lib.icon1_1_icon1_office = function() {
  this.initialize(img.icon1_1_icon1_office);
 }).prototype = p = new cjs.Bitmap();
 p.nominalBounds = new cjs.Rectangle(0, 0, 212, 213);
 (lib.icon1_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_icon1 = new lib.icon1_1_icon1_office();
  this.cvr_icon1.name = "cvr_icon1";
  this.cvr_icon1.parent = this;
  this.cvr_icon1.setTransform(0, 0, 0.6671361502347417, 0.6671361502347417);
  this.timeline.addTween(cjs.Tween.get(this.cvr_icon1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.icon1_1, new cjs.Rectangle(0, 0, 141.4, 142.1), null);
 (lib.gr = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["rgba(217,237,141,0)", "#D9ED8D"], [0, 1], -6, -163.9, -6, -223.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
  this.shape.setTransform(150, 300);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.gr, new cjs.Rectangle(0, 0, 300, 600), null);
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
  this.shape.graphics.f("#C0DF53").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
  this.shape.setTransform(150, 300);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.black_plate, new cjs.Rectangle(0, 0, 300, 600), null);
 (lib.bg_g = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["#C0DF53", "#D9ED8D"], [0, 1], -6, -163.9, -6, -223.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
  this.shape.setTransform(150, 300);
  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
 }).prototype = getMCSymbolPrototype(lib.bg_g, new cjs.Rectangle(0, 0, 300, 600), null);
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
  mask.graphics.p("A2GQVIAAlyMAsNAAAIAAFyg");
  mask.setTransform(141.4902, 104.4998);
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
  mask_1.graphics.p("A2GNcIAAlUMAsNAAAIAAFUg");
  mask_1.setTransform(141.4902, 85.9744);
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
  mask_2.graphics.p("A2GK1IAAn1MAsNAAAIAAH1g");
  mask_2.setTransform(141.4902, 69.25);
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
 p.nominalBounds = new cjs.Rectangle(55, 89, 228, 120);
 (lib.txt03 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A2GOBIAAlyMAsNAAAIAAFyg");
  mask.setTransform(141.4902, 89.7498);
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
  mask_1.graphics.p("A2GLGIAAn0MAsNAAAIAAH0g");
  mask_1.setTransform(141.4902, 71);
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
 p.nominalBounds = new cjs.Rectangle(0, 96, 283, 83.5);
 (lib.txt02_1 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("EgSbAgWIAAn0MAk3AAAIAAH0g");
  mask.setTransform(118, 207);
  this.instance = new lib.t2_1();
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
  }, 14, cjs.Ease.get(1)).wait(1));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("AybcXIAAn0MAk3AAAIAAH0g");
  mask_1.setTransform(118, 181.5);
  this.instance_1 = new lib.t2_1();
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
  }, 14, cjs.Ease.get(1)).wait(6));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 322, 236, 82.69999999999999);
 (lib.txt02 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AybRyIAAn1MAk3AAAIAAH1g");
  mask.setTransform(118, 113.75);
  this.instance = new lib.t2();
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
  mask_1.graphics.p("A2GN4IAAlyMAsNAAAIAAFyg");
  mask_1.setTransform(141.4906, 88.7498);
  this.instance_1 = new lib.t2();
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
  mask_2.graphics.p("A2GK8IAAn0MAsNAAAIAAH0g");
  mask_2.setTransform(141.4906, 70);
  this.instance_2 = new lib.t2();
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
 p.nominalBounds = new cjs.Rectangle(0, 95, 283, 124.9);
 (lib.txt01 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("A0FRCIAAn0MAoLAAAIAAH0g");
  mask.setTransform(128.6247, 109);
  this.instance = new lib.t1();
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
  }, 14, cjs.Ease.get(1)).wait(21));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("A0FNDIAAn0MAoLAAAIAAH0g");
  mask_1.setTransform(128.6247, 83.5);
  this.instance_1 = new lib.t1();
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
  }, 14, cjs.Ease.get(1)).wait(26));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(0, 119, 257.3, 94);
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
 p.nominalBounds = new cjs.Rectangle(-4, -4, 124.6, 112.2);
 (lib.icon1_2 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.cvr_icon1 = new lib.icon1_1();
  this.cvr_icon1.name = "cvr_icon1";
  this.cvr_icon1.parent = this;
  this.cvr_icon1.setTransform(70.7, 71, 1, 1, 0, 0, 0, 70.7, 71);
  this.timeline.addTween(cjs.Tween.get(this.cvr_icon1).wait(1));
 }).prototype = getMCSymbolPrototype(lib.icon1_2, new cjs.Rectangle(0, 0, 141.4, 142.1), null);
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
   cvr_frame1_2: 83,
   cvr_frame2_3: 178,
   "cvr_frame#3": 240,
   cvr_stay: 262,
   cvr_frame4_1: 349
  });
  this.frame_262 = function() {
   if (!this.cycle) this.cycle = 0;
   this.cycle++;
   var frames = this.duration * this.cycle + this.currentFrame;
   if (frames / createjs.Ticker.getMeasuredFPS() > 30) {
    if (this.cycle > 1) {
     _globalStop(this.stage);
    } else {
     var stopFrame = this.currentFrame;
     var tst = cjs.Tween.get(this);
     this.timeline.addTween(cjs.Tween.get(this).wait(this.duration - 1).call(function() {
      globalGotoAndStop(stopFrame);
     }));
    }
   }
  }
  this.timeline.addTween(cjs.Tween.get(this).wait(262).call(this.frame_262));
  this.instance = new lib.black_plate();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(349).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(-1)).wait(1));
  this.instance_1 = new lib.logo();
  this.instance_1.parent = this;
  this.instance_1.setTransform(112.5, 26.1, 1, 1, 0, 0, 0, 112.5, 26.1);
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(85).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(87));
  this.instance_2 = new lib.txt04("synched", 0, false);
  this.instance_2.parent = this;
  this.instance_2.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_2._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(295).to({
   _off: false
  }, 0).wait(85));
  this.instance_3 = new lib.txt02("synched", 0, false);
  this.instance_3.parent = this;
  this.instance_3.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_3._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({
   _off: false
  }, 0).wait(75).to({
   startPosition: 34
  }, 0).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(185));
  this.instance_4 = new lib.gr();
  this.instance_4.parent = this;
  this.instance_4.setTransform(150, 300, 1, 1, 0, 0, 0, 150, 300);
  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({
   alpha: 0
  }, 14, cjs.Ease.get(1)).wait(85).to({
   regY: 300.1,
   y: 300.1,
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(87));
  this.instance_5 = new lib.l4();
  this.instance_5.parent = this;
  this.instance_5.setTransform(150.5, 560.1, 1, 1, 0, 0, 0, 149.5, 40.1);
  this.instance_5.alpha = 0;
  this.instance_5._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(310).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).wait(56));
  this.instance_6 = new lib.fish02_float();
  this.instance_6.parent = this;
  this.instance_6.setTransform(425, 464.7, 1, 1, 0, 0, 0, 114, 103.7);
  this.instance_6._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(285).to({
   _off: false
  }, 0).to({
   x: 165
  }, 14, cjs.Ease.get(1)).wait(81));
  var mask = new cjs.Shape();
  mask._off = true;
  var mask_graphics_300 = new cjs.Graphics().p("AGzYhQgUgUAAgdQAAgdAUgVQAVgUAdAAQAdAAAUAUQAVAVAAAdQAAAdgVAUQgUAVgdAAQgdAAgVgVg");
  var mask_graphics_301 = new cjs.Graphics().p("AFLYzQgugtAAhBQAAhBAuguQAuguBBAAQBBAAAtAuQAuAuAABBQAABBguAtQgtAuhBAAQhBAAgugug");
  var mask_graphics_302 = new cjs.Graphics().p("ADqZEQhGhFAAhjQAAhiBGhFQBFhGBiAAQBjAABFBGQBGBFAABiQAABjhGBFQhFBGhjAAQhiAAhFhGg");
  var mask_graphics_303 = new cjs.Graphics().p("ACQZTQhbhbAAiBQAAiABbhcQBchbCAAAQCBAABbBbQBcBcAACAQAACBhcBbQhbBciBAAQiAAAhchcg");
  var mask_graphics_304 = new cjs.Graphics().p("AA/ZhQhuhuAAidQAAidBuhvQBvhvCdAAQCdAABuBvQBvBvAACdQAACdhvBuQhuBvidAAQidAAhvhvg");
  var mask_graphics_305 = new cjs.Graphics().p("AgKZuQiAiBAAi2QAAi2CAiBQCAiAC2AAQC2AACBCAQCBCBAAC2QAAC2iBCBQiBCBi2AAQi2AAiAiBg");
  var mask_graphics_306 = new cjs.Graphics().p("AhMZ5QiQiQAAjNQAAjNCQiRQCQiQDNAAQDNAACQCQQCRCRAADNQAADNiRCQQiQCRjNAAQjNAAiQiRg");
  var mask_graphics_307 = new cjs.Graphics().p("AiGaDQififAAjgQAAjhCfifQCeifDhAAQDgAACfCfQCfCfAADhQAADgifCfQifCfjgAAQjhAAieifg");
  var mask_graphics_308 = new cjs.Graphics().p("Ai4aMQirirAAjyQAAjyCrirQCrirDxAAQDyAACrCrQCrCrAADyQAADyirCrQirCrjyAAQjxAAirirg");
  var mask_graphics_309 = new cjs.Graphics().p("AjjaTQi1i1AAkBQAAkBC1i1QC1i1EAAAQEBAAC1C1QC2C1AAEBQAAEBi2C1Qi1C2kBAAQkAAAi1i2g");
  var mask_graphics_310 = new cjs.Graphics().p("AkGaZQi+i+AAkMQAAkNC+i+QC+i+EMAAQEMAAC+C+QC+C+AAENQAAEMi+C+Qi+C+kMAAQkMAAi+i+g");
  var mask_graphics_311 = new cjs.Graphics().p("AkhaeQjFjFAAkWQAAkWDFjEQDEjFEVAAQEWAADFDFQDFDEAAEWQAAEWjFDFQjFDFkWAAQkVAAjEjFg");
  var mask_graphics_312 = new cjs.Graphics().p("Ak0ahQjKjJAAkdQAAkcDKjJQDJjKEbAAQEdAADJDKQDKDJAAEcQAAEdjKDJQjJDKkdAAQkbAAjJjKg");
  var mask_graphics_313 = new cjs.Graphics().p("AlAajQjMjMAAkgQAAkhDMjMQDMjMEgAAQEgAADMDMQDMDMAAEhQAAEgjMDMQjMDMkgAAQkgAAjMjMg");
  var mask_graphics_314 = new cjs.Graphics().p("AlEakQjNjNAAkiQAAkiDNjNQDNjNEhAAQEiAADNDNQDNDNAAEiQAAEijNDNQjNDNkiAAQkhAAjNjNg");
  this.timeline.addTween(cjs.Tween.get(mask).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(300).to({
   graphics: mask_graphics_300,
   x: 55.5004,
   y: 159.0004
  }).wait(1).to({
   graphics: mask_graphics_301,
   x: 59.8397,
   y: 163.3397
  }).wait(1).to({
   graphics: mask_graphics_302,
   x: 63.8575,
   y: 167.3575
  }).wait(1).to({
   graphics: mask_graphics_303,
   x: 67.5538,
   y: 171.0538
  }).wait(1).to({
   graphics: mask_graphics_304,
   x: 70.9288,
   y: 174.4288
  }).wait(1).to({
   graphics: mask_graphics_305,
   x: 73.9823,
   y: 177.4823
  }).wait(1).to({
   graphics: mask_graphics_306,
   x: 76.7144,
   y: 180.2144
  }).wait(1).to({
   graphics: mask_graphics_307,
   x: 79.1251,
   y: 182.6251
  }).wait(1).to({
   graphics: mask_graphics_308,
   x: 81.2144,
   y: 184.7144
  }).wait(1).to({
   graphics: mask_graphics_309,
   x: 82.9822,
   y: 186.4822
  }).wait(1).to({
   graphics: mask_graphics_310,
   x: 84.4286,
   y: 187.9286
  }).wait(1).to({
   graphics: mask_graphics_311,
   x: 85.5536,
   y: 189.0536
  }).wait(1).to({
   graphics: mask_graphics_312,
   x: 86.3572,
   y: 189.8572
  }).wait(1).to({
   graphics: mask_graphics_313,
   x: 86.8393,
   y: 190.3393
  }).wait(1).to({
   graphics: mask_graphics_314,
   x: 87,
   y: 190.5
  }).wait(66));
  this.instance_7 = new lib.icon03();
  this.instance_7.parent = this;
  this.instance_7.setTransform(104.7, 312.4, 1, 1, 0, 0, 0, 70.7, 71.4);
  this.instance_7._off = true;
  var maskedShapeInstanceList = [this.instance_7];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300).to({
   _off: false
  }, 0).wait(80));
  this.instance_8 = new lib.bubble_1();
  this.instance_8.parent = this;
  this.instance_8.setTransform(106.65, 311.8, 0.0595, 0.0595, 0, 0, 0, 151.2, 151.2);
  this.instance_8._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(295).to({
   _off: false
  }, 0).to({
   regX: 151.1,
   regY: 150.9,
   scaleX: 0.5957,
   scaleY: 0.5957,
   y: 311.75
  }, 14, cjs.Ease.get(1)).wait(71));
  this.instance_9 = new lib.bubble_1();
  this.instance_9.parent = this;
  this.instance_9.setTransform(143.35, 146.3, 0.0715, 0.0715, 0, 0, 0, 151.1, 151.8);
  this.instance_9._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(290).to({
   _off: false
  }, 0).to({
   regX: 151,
   regY: 151.6,
   scaleX: 0.8333,
   scaleY: 0.8333,
   x: 143.4
  }, 14, cjs.Ease.get(1)).wait(76));
  this.instance_10 = new lib.black_plate();
  this.instance_10.parent = this;
  this.instance_10.alpha = 0;
  this.instance_10._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(277).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(87));
  this.instance_11 = new lib.l3();
  this.instance_11.parent = this;
  this.instance_11.setTransform(150.5, 560.1, 1, 1, 0, 0, 0, 149.5, 40.1);
  this.instance_11.alpha = 0;
  this.instance_11._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(205).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 74).wait(87));
  this.instance_12 = new lib.packshot_1();
  this.instance_12.parent = this;
  this.instance_12.setTransform(430.4, 415.7, 1, 1, 0, 0, 0, 117.4, 56.7);
  this.instance_12._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(185).to({
   _off: false
  }, 0).to({
   x: 150.4
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 94).wait(87));
  this.instance_13 = new lib.txt03("synched", 0, false);
  this.instance_13.parent = this;
  this.instance_13.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_13._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(195).to({
   _off: false
  }, 0).to({
   _off: true
  }, 98).wait(87));
  this.instance_14 = new lib.bubble_1();
  this.instance_14.parent = this;
  this.instance_14.setTransform(124.5, 139.15, 0.0443, 0.0443, 0, 0, 0, 151.3, 151.3);
  this.instance_14._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(190).to({
   _off: false
  }, 0).to({
   regX: 150.7,
   regY: 150.7,
   scaleX: 0.7329,
   scaleY: 0.7329
  }, 13, cjs.Ease.get(1)).to({
   _off: true
  }, 90).wait(87));
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  var mask_1_graphics_200 = new cjs.Graphics().p("APUVnQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
  var mask_1_graphics_201 = new cjs.Graphics().p("ANyV4QgmgmAAg1QAAg1AmgmQAmgmA1AAQA1AAAmAmQAlAmAAA1QAAA1glAmQgmAmg1AAQg1AAgmgmg");
  var mask_1_graphics_202 = new cjs.Graphics().p("AMYWHQg8g7AAhVQAAhUA8g7QA7g8BUAAQBVAAA7A8QA8A7AABUQAABVg8A7Qg7A8hVAAQhUAAg7g8g");
  var mask_1_graphics_203 = new cjs.Graphics().p("ALFWVQhQhPAAhxQAAhxBQhPQBPhQBxAAQBxAABPBQQBQBPAABxQAABxhQBPQhPBQhxAAQhxAAhPhQg");
  var mask_1_graphics_204 = new cjs.Graphics().p("AJ5WiQhihiAAiLQAAiKBihiQBihiCKAAQCLAABiBiQBiBiAACKQAACLhiBiQhiBiiLAAQiKAAhihig");
  var mask_1_graphics_205 = new cjs.Graphics().p("AI0WuQhzhzAAiiQAAiiBzhzQBzhzCiAAQCiAABzBzQByBzAACiQAACihyBzQhzBziiAAQiiAAhzhzg");
  var mask_1_graphics_206 = new cjs.Graphics().p("AH2W4QiBiBAAi4QAAi3CBiBQCCiCC3AAQC4AACBCCQCCCBAAC3QAAC4iCCBQiBCCi4AAQi3AAiCiCg");
  var mask_1_graphics_207 = new cjs.Graphics().p("AHAXCQiOiPAAjKQAAjKCOiPQCPiODKAAQDKAACOCOQCPCPAADKQAADKiPCPQiOCOjKAAQjKAAiPiOg");
  var mask_1_graphics_208 = new cjs.Graphics().p("AGRXJQiaiaAAjaQAAjZCaibQCaiaDaAAQDaAACaCaQCaCbAADZQAADaiaCaQiaCbjaAAQjaAAiaibg");
  var mask_1_graphics_209 = new cjs.Graphics().p("AFpXQQijijAAjoQAAjoCjijQCkikDoAAQDnAACkCkQCkCjAADoQAADoikCjQikCkjnAAQjoAAikikg");
  var mask_1_graphics_210 = new cjs.Graphics().p("AFJXWQisisAAjzQAAjyCsisQCsirDyAAQDzAACsCrQCrCsAADyQAADzirCsQisCrjzAAQjyAAisirg");
  var mask_1_graphics_211 = new cjs.Graphics().p("AEwXaQiyiyAAj7QAAj7CyiyQCxiyD8AAQD7AACyCyQCyCyAAD7QAAD7iyCyQiyCyj7AAQj8AAixiyg");
  var mask_1_graphics_212 = new cjs.Graphics().p("AEeXdQi3i2AAkCQAAkBC3i2QC2i2EBAAQECAAC2C2QC2C2AAEBQAAECi2C2Qi2C2kCAAQkBAAi2i2g");
  var mask_1_graphics_213 = new cjs.Graphics().p("AETXfQi5i5AAkFQAAkFC5i5QC4i5EGAAQEFAAC5C5QC4C5AAEFQAAEFi4C5Qi5C5kFAAQkGAAi4i5g");
  var mask_1_graphics_214 = new cjs.Graphics().p("AEPXfQi6i5AAkHQAAkGC6i6QC5i5EHAAQEHAAC5C5QC6C6AAEGQAAEHi6C5Qi5C6kHAAQkHAAi5i6g");
  this.timeline.addTween(cjs.Tween.get(mask_1).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(200).to({
   graphics: mask_1_graphics_200,
   x: 106.1309,
   y: 139.7309
  }).wait(1).to({
   graphics: mask_1_graphics_201,
   x: 110.1481,
   y: 143.7515
  }).wait(1).to({
   graphics: mask_1_graphics_202,
   x: 113.8677,
   y: 147.4744
  }).wait(1).to({
   graphics: mask_1_graphics_203,
   x: 117.2898,
   y: 150.8994
  }).wait(1).to({
   graphics: mask_1_graphics_204,
   x: 120.4143,
   y: 154.0265
  }).wait(1).to({
   graphics: mask_1_graphics_205,
   x: 123.2412,
   y: 156.8559
  }).wait(1).to({
   graphics: mask_1_graphics_206,
   x: 125.7706,
   y: 159.3874
  }).wait(1).to({
   graphics: mask_1_graphics_207,
   x: 128.0024,
   y: 161.6211
  }).wait(1).to({
   graphics: mask_1_graphics_208,
   x: 129.9366,
   y: 163.557
  }).wait(1).to({
   graphics: mask_1_graphics_209,
   x: 131.5732,
   y: 165.195
  }).wait(1).to({
   graphics: mask_1_graphics_210,
   x: 132.9123,
   y: 166.5352
  }).wait(1).to({
   graphics: mask_1_graphics_211,
   x: 133.9538,
   y: 167.5776
  }).wait(1).to({
   graphics: mask_1_graphics_212,
   x: 134.6977,
   y: 168.3222
  }).wait(1).to({
   graphics: mask_1_graphics_213,
   x: 135.1441,
   y: 168.7689
  }).wait(1).to({
   graphics: mask_1_graphics_214,
   x: 135.2702,
   y: 168.8952
  }).wait(79).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(87));
  this.instance_15 = new lib._new();
  this.instance_15.parent = this;
  this.instance_15.setTransform(212.8, 274, 1, 1, 0, 0, 0, 57.8, 52);
  this.instance_15._off = true;
  var maskedShapeInstanceList = [this.instance_15];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(200).to({
   _off: false
  }, 0).to({
   _off: true
  }, 93).wait(87));
  this.instance_16 = new lib.bubble_1();
  this.instance_16.parent = this;
  this.instance_16.setTransform(207.7, 276.4, 0.0402, 0.0402, 0, 0, 0, 151.7, 151.7);
  this.instance_16._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(195).to({
   _off: false
  }, 0).to({
   regX: 152,
   regY: 151.8,
   scaleX: 0.4416,
   scaleY: 0.4416
  }, 13, cjs.Ease.get(1)).to({
   _off: true
  }, 85).wait(87));
  this.instance_17 = new lib.bg_g();
  this.instance_17.parent = this;
  this.instance_17.alpha = 0;
  this.instance_17._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(180).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 99).wait(87));
  this.instance_18 = new lib.l2();
  this.instance_18.parent = this;
  this.instance_18.setTransform(148.5, 577.85, 1, 1, 0, 0, 0, 141.5, 14.8);
  this.instance_18.alpha = 0;
  this.instance_18._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 61).wait(185));
  this.instance_19 = new lib.bubble_1();
  this.instance_19.parent = this;
  this.instance_19.setTransform(137.2, 145.75, 0.0395, 0.0395, 0, 0, 0, 149.5, 149.5);
  this.instance_19._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(100).to({
   _off: false
  }, 0).to({
   regX: 149.4,
   regY: 149.4,
   scaleX: 1,
   scaleY: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 80).wait(185));
  this.instance_20 = new lib.fish01_float("synched", 0, false);
  this.instance_20.parent = this;
  this.instance_20.setTransform(433, 412.7, 1, 1, 0, 0, 0, 114, 103.7);
  this.instance_20._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(95).to({
   _off: false
  }, 0).to({
   x: 173,
   startPosition: 13
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 86).wait(185));
  this.instance_21 = new lib.black_plate();
  this.instance_21.parent = this;
  this.instance_21.alpha = 0;
  this.instance_21._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(84).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 15, cjs.Ease.get(1)).to({
   _off: true
  }, 1).wait(280));
  this.instance_22 = new lib.l1();
  this.instance_22.parent = this;
  this.instance_22.setTransform(148.5, 577.85, 1, 1, 0, 0, 0, 141.5, 14.8);
  this.instance_22.alpha = 0;
  this.instance_22._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(40).to({
   _off: false
  }, 0).to({
   alpha: 1
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 46).wait(280));
  this.instance_23 = new lib.txt02_1("synched", 0, false);
  this.instance_23.parent = this;
  this.instance_23.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_23._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(26).to({
   _off: false
  }, 0).to({
   _off: true
  }, 74).wait(280));
  this.instance_24 = new lib.txt01("synched", 0, false);
  this.instance_24.parent = this;
  this.instance_24.setTransform(108, 44, 1, 1, 0, 0, 0, 108, 44);
  this.instance_24._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(5).to({
   _off: false
  }, 0).to({
   _off: true
  }, 95).wait(280));
  this.instance_25 = new lib.bubble_1();
  this.instance_25.parent = this;
  this.instance_25.setTransform(87.15, 369.4, 0.048, 0.048, 0, 0, 0, 150.9, 150.9);
  this.instance_25._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(20).to({
   _off: false
  }, 0).to({
   regX: 151,
   regY: 151.3,
   scaleX: 0.4852,
   scaleY: 0.4852
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 66).wait(280));
  var mask_2 = new cjs.Shape();
  mask_2._off = true;
  var mask_2_graphics_30 = new cjs.Graphics().p("EAKhAlPQgXgXAAggQAAggAXgXQAXgWAgAAQAgAAAWAWQAXAXAAAgQAAAggXAXQgWAWggAAQggAAgXgWg");
  var mask_2_graphics_31 = new cjs.Graphics().p("EAJSAlbQgqgqAAg7QAAg7AqgqQApgqA8AAQA7AAAqAqQAqAqAAA7QAAA7gqAqQgqAqg7AAQg8AAgpgqg");
  var mask_2_graphics_32 = new cjs.Graphics().p("EAIIAlnQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA7A8QA8A8AABUQAABVg8A8Qg7A7hVAAQhUAAg8g7g");
  var mask_2_graphics_33 = new cjs.Graphics().p("EAHEAlxQhMhMAAhsQAAhrBMhNQBMhMBsAAQBsAABMBMQBMBNAABrQAABshMBMQhMBMhsAAQhsAAhMhMg");
  var mask_2_graphics_34 = new cjs.Graphics().p("EAGGAl7QhbhbAAiBQAAiBBbhbQBchbCAAAQCBAABcBbQBbBbAACBQAACBhbBbQhcBbiBAAQiAAAhchbg");
  var mask_2_graphics_35 = new cjs.Graphics().p("EAFOAmEQhohpAAiUQAAiUBohpQBphpCUAAQCUAABpBpQBpBpAACUQAACUhpBpQhpBoiUAAQiUAAhphog");
  var mask_2_graphics_36 = new cjs.Graphics().p("EAEcAmLQh0h0AAimQAAilB0h1QB1h1CmAAQClAAB1B1QB0B1AAClQAACmh0B0Qh1B1ilAAQimAAh1h1g");
  var mask_2_graphics_37 = new cjs.Graphics().p("EADwAmSQh/h/AAi1QAAi0B/iAQCAh/C0AAQC1AAB/B/QCACAAAC0QAAC1iAB/Qh/CAi1AAQi0AAiAiAg");
  var mask_2_graphics_38 = new cjs.Graphics().p("EADKAmYQiJiIAAjCQAAjCCJiIQCJiJDBAAQDCAACJCJQCICIAADCQAADCiICIQiJCJjCAAQjBAAiJiJg");
  var mask_2_graphics_39 = new cjs.Graphics().p("EACqAmdQiRiQAAjNQAAjNCRiQQCQiRDNAAQDNAACQCRQCRCQAADNQAADNiRCQQiQCRjNAAQjNAAiQiRg");
  var mask_2_graphics_40 = new cjs.Graphics().p("EACPAmiQiWiYAAjVQAAjWCWiXQCXiXDWAAQDWAACXCXQCXCXAADWQAADViXCYQiXCXjWAAQjWAAiXiXg");
  var mask_2_graphics_41 = new cjs.Graphics().p("EAB6AmlQibicAAjdQAAjdCbicQCdicDcAAQDdAACcCcQCcCcAADdQAADdicCcQicCcjdAAQjcAAidicg");
  var mask_2_graphics_42 = new cjs.Graphics().p("EABsAmnQifigAAjhQAAjiCfigQCfigDiAAQDiAACgCgQCfCgAADiQAADhifCgQigCgjiAAQjiAAifigg");
  var mask_2_graphics_43 = new cjs.Graphics().p("EABjAmoQihihAAjlQAAjlChiiQCiiiDlAAQDkAACiCiQCiCiAADlQAADliiChQiiCijkAAQjlAAiiiig");
  var mask_2_graphics_44 = new cjs.Graphics().p("EABfAmpQihijAAjmQAAjlChijQCjiiDmAAQDmAACiCiQCjCjAADlQAADmijCjQiiCijmAAQjmAAijiig");
  this.timeline.addTween(cjs.Tween.get(mask_2).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(30).to({
   graphics: mask_2_graphics_30,
   x: 80.5039,
   y: 240.5289
  }).wait(1).to({
   graphics: mask_2_graphics_31,
   x: 83.7851,
   y: 243.6986
  }).wait(1).to({
   graphics: mask_2_graphics_32,
   x: 86.8232,
   y: 246.6335
  }).wait(1).to({
   graphics: mask_2_graphics_33,
   x: 89.6184,
   y: 249.3336
  }).wait(1).to({
   graphics: mask_2_graphics_34,
   x: 92.1704,
   y: 251.7989
  }).wait(1).to({
   graphics: mask_2_graphics_35,
   x: 94.4794,
   y: 254.0295
  }).wait(1).to({
   graphics: mask_2_graphics_36,
   x: 96.5454,
   y: 256.0252
  }).wait(1).to({
   graphics: mask_2_graphics_37,
   x: 98.3682,
   y: 257.7862
  }).wait(1).to({
   graphics: mask_2_graphics_38,
   x: 99.9481,
   y: 259.3123
  }).wait(1).to({
   graphics: mask_2_graphics_39,
   x: 101.2849,
   y: 260.6037
  }).wait(1).to({
   graphics: mask_2_graphics_40,
   x: 102.3786,
   y: 261.6602
  }).wait(1).to({
   graphics: mask_2_graphics_41,
   x: 103.2293,
   y: 262.482
  }).wait(1).to({
   graphics: mask_2_graphics_42,
   x: 103.8369,
   y: 263.069
  }).wait(1).to({
   graphics: mask_2_graphics_43,
   x: 104.2015,
   y: 263.4212
  }).wait(1).to({
   graphics: mask_2_graphics_44,
   x: 104.2636,
   y: 263.5386
  }).wait(56).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(280));
  this.instance_26 = new lib.icon02();
  this.instance_26.parent = this;
  this.instance_26.setTransform(152.7, 472.4, 1, 1, 0, 0, 0, 56.7, 57.4);
  this.instance_26._off = true;
  var maskedShapeInstanceList = [this.instance_26];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(30).to({
   _off: false
  }, 0).to({
   _off: true
  }, 70).wait(280));
  this.instance_27 = new lib.bubble_1();
  this.instance_27.parent = this;
  this.instance_27.setTransform(153.25, 473.5, 0.0576, 0.0576, 0, 0, 0, 151, 151.8);
  this.instance_27._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(25).to({
   _off: false
  }, 0).to({
   regX: 151.1,
   regY: 151.6,
   scaleX: 0.4585,
   scaleY: 0.4585
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 61).wait(280));
  var mask_3 = new cjs.Shape();
  mask_3._off = true;
  var mask_3_graphics_10 = new cjs.Graphics().p("AN6ZTQgUgUAAgdQAAgdAUgVQAVgUAdAAQAdAAAUAUQAVAVAAAdQAAAdgVAUQgUAVgdAAQgdAAgVgVg");
  var mask_3_graphics_11 = new cjs.Graphics().p("AMSZlQgugtAAhBQAAhBAuguQAuguBBAAQBBAAAtAuQAuAuAABBQAABBguAtQgtAuhBAAQhBAAgugug");
  var mask_3_graphics_12 = new cjs.Graphics().p("AKxZ2QhGhFAAhjQAAhiBGhFQBFhGBiAAQBjAABFBGQBGBFAABiQAABjhGBFQhFBGhjAAQhiAAhFhGg");
  var mask_3_graphics_13 = new cjs.Graphics().p("AJXaFQhbhbAAiBQAAiABbhcQBchbCAAAQCBAABbBbQBcBcAACAQAACBhcBbQhbBciBAAQiAAAhchcg");
  var mask_3_graphics_14 = new cjs.Graphics().p("AIGaTQhvhuAAidQAAidBvhvQBvhvCdAAQCdAABuBvQBvBvAACdQAACdhvBuQhuBvidAAQidAAhvhvg");
  var mask_3_graphics_15 = new cjs.Graphics().p("AG8agQiAiBAAi2QAAi2CAiBQCBiAC2AAQC2AACBCAQCBCBAAC2QAAC2iBCBQiBCBi2AAQi2AAiBiBg");
  var mask_3_graphics_16 = new cjs.Graphics().p("AF6arQiQiQAAjNQAAjNCQiRQCRiQDNAAQDNAACQCQQCRCRAADNQAADNiRCQQiQCRjNAAQjNAAiRiRg");
  var mask_3_graphics_17 = new cjs.Graphics().p("AFAa1QififAAjgQAAjhCfifQCfifDhAAQDgAACfCfQCfCfAADhQAADgifCfQifCfjgAAQjhAAififg");
  var mask_3_graphics_18 = new cjs.Graphics().p("AEOa+QirirAAjyQAAjyCrirQCrirDyAAQDyAACrCrQCrCrAADyQAADyirCrQirCrjyAAQjyAAirirg");
  var mask_3_graphics_19 = new cjs.Graphics().p("ADjbFQi1i1AAkBQAAkBC1i1QC1i1EBAAQEBAAC1C1QC2C1AAEBQAAEBi2C1Qi1C2kBAAQkBAAi1i2g");
  var mask_3_graphics_20 = new cjs.Graphics().p("ADAbLQi+i+AAkMQAAkNC+i+QC+i+ENAAQEMAAC+C+QC+C+AAENQAAEMi+C+Qi+C+kMAAQkNAAi+i+g");
  var mask_3_graphics_21 = new cjs.Graphics().p("AClbQQjEjFAAkWQAAkWDEjEQDEjFEWAAQEWAADFDFQDFDEAAEWQAAEWjFDFQjFDFkWAAQkWAAjEjFg");
  var mask_3_graphics_22 = new cjs.Graphics().p("ACSbTQjJjJAAkdQAAkcDJjJQDJjKEcAAQEdAADJDKQDKDJAAEcQAAEdjKDJQjJDKkdAAQkcAAjJjKg");
  var mask_3_graphics_23 = new cjs.Graphics().p("ACGbVQjLjMAAkgQAAkhDLjMQDMjMEhAAQEgAADMDMQDMDMAAEhQAAEgjMDMQjMDMkgAAQkhAAjMjMg");
  var mask_3_graphics_24 = new cjs.Graphics().p("ACCbWQjMjNAAkiQAAkiDMjNQDNjNEiAAQEiAADNDNQDNDNAAEiQAAEijNDNQjNDNkiAAQkiAAjNjNg");
  this.timeline.addTween(cjs.Tween.get(mask_3).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(10).to({
   graphics: mask_3_graphics_10,
   x: 101.0004,
   y: 164.0004
  }).wait(1).to({
   graphics: mask_3_graphics_11,
   x: 105.3397,
   y: 168.3397
  }).wait(1).to({
   graphics: mask_3_graphics_12,
   x: 109.3575,
   y: 172.3575
  }).wait(1).to({
   graphics: mask_3_graphics_13,
   x: 113.0538,
   y: 176.0538
  }).wait(1).to({
   graphics: mask_3_graphics_14,
   x: 116.4288,
   y: 179.4288
  }).wait(1).to({
   graphics: mask_3_graphics_15,
   x: 119.4823,
   y: 182.4823
  }).wait(1).to({
   graphics: mask_3_graphics_16,
   x: 122.2144,
   y: 185.2144
  }).wait(1).to({
   graphics: mask_3_graphics_17,
   x: 124.6251,
   y: 187.6251
  }).wait(1).to({
   graphics: mask_3_graphics_18,
   x: 126.7144,
   y: 189.7144
  }).wait(1).to({
   graphics: mask_3_graphics_19,
   x: 128.4822,
   y: 191.4822
  }).wait(1).to({
   graphics: mask_3_graphics_20,
   x: 129.9286,
   y: 192.9286
  }).wait(1).to({
   graphics: mask_3_graphics_21,
   x: 131.0536,
   y: 194.0536
  }).wait(1).to({
   graphics: mask_3_graphics_22,
   x: 131.8572,
   y: 194.8572
  }).wait(1).to({
   graphics: mask_3_graphics_23,
   x: 132.3393,
   y: 195.3393
  }).wait(1).to({
   graphics: mask_3_graphics_24,
   x: 132.5,
   y: 195.5
  }).wait(76).to({
   graphics: null,
   x: 0,
   y: 0
  }).wait(280));
  this.instance_28 = new lib.icon1_2();
  this.instance_28.parent = this;
  this.instance_28.setTransform(194.7, 321, 1, 1, 0, 0, 0, 70.7, 71);
  this.instance_28._off = true;
  var maskedShapeInstanceList = [this.instance_28];
  for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
   maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
  }
  this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(10).to({
   _off: false
  }, 0).to({
   _off: true
  }, 90).wait(280));
  this.instance_29 = new lib.bubble_1();
  this.instance_29.parent = this;
  this.instance_29.setTransform(196.55, 322.75, 0.0369, 0.0369, 0, 0, 0, 150.5, 150.5);
  this.instance_29._off = true;
  this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(5).to({
   _off: false
  }, 0).to({
   regX: 150.4,
   regY: 150.8,
   scaleX: 0.5689,
   scaleY: 0.5689,
   y: 322.8
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 81).wait(280));
  this.instance_30 = new lib.bubble_1();
  this.instance_30.parent = this;
  this.instance_30.setTransform(131.2, 170.75, 0.0552, 0.0552, 0, 0, 0, 149.3, 149.3);
  this.timeline.addTween(cjs.Tween.get(this.instance_30).to({
   regX: 149.2,
   regY: 149.7,
   scaleX: 0.9203,
   scaleY: 0.9203,
   x: 131.3
  }, 14, cjs.Ease.get(1)).to({
   _off: true
  }, 86).wait(280));
  this.instance_31 = new lib.black_plate();
  this.instance_31.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(380));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(-12.2, -3.6, 560, 604.5);
 (lib.JnJ_Motilegas_300x600 = function(mode, startPosition, loop) {
  this.initialize(mode, startPosition, loop, {});
  this.instance = new lib.content();
  this.instance.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  this.instance_1 = new lib.black_plate();
  this.instance_1.parent = this;
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
 }).prototype = p = new cjs.MovieClip();
 p.nominalBounds = new cjs.Rectangle(150, 300, 150, 300);
 lib.properties = {
  id: '1E4D562F91EE4B408F0AC49B20246D76',
  width: 300,
  height: 600,
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
   src: "icon2.png",
   id: "icon2"
  }, {
   src: "icon3.png",
   id: "icon3"
  }, {
   src: "packshot.png",
   id: "packshot"
  }, {
   src: "t2_1_t2_office.png",
   id: "t2_1_t2_office"
  }, {
   src: "t1_t1_office.png",
   id: "t1_t1_office"
  }, {
   src: "icon1_1_icon1_office.png",
   id: "icon1_1_icon1_office"
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