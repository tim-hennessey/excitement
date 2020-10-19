(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,860);


(lib.pack1 = function() {
	this.initialize(img.pack1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,382);


(lib.pack3 = function() {
	this.initialize(img.pack3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,146);


(lib.packnew = function() {
	this.initialize(img.packnew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,331);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AosBMQgHgCgJgIIAJgOQAFAHAHACQAIACAIAAIAJgBIAIgEQAEgDACgEQACgFAAgHIAAgKQgFAHgHAEQgHAEgJAAQgIAAgHgDQgGgDgHgGQgFgHgDgHQgCgJAAgJQAAgKACgJQAEgIAEgGQAGgGAHgDQAHgDAIAAQAIAAAIAEQAIAEAEAHIAAgMIATAAIAABRQAAANgEAGQgEAIgGAFQgHAEgIACQgHACgIAAQgLAAgKgDgAomgUQgGAHgBANQABAMAGAHQAHAIALAAQAGAAAHgEQAFgCAEgGIAAgfQgEgGgFgCQgHgEgGAAQgLAAgHAIgAtmBNIAAh3IAUAAIAAALQAEgGAIgEQAGgEAKAAQAIAAAGADQAIADAFAGQAFAGADAJQADAIAAAKQAAALgDAIQgDAKgFAEQgFAGgIADQgGAEgIAAQgJAAgHgEQgHgEgFgHIAAAugAtJgZQgHAEgCAFIAAAhIADAFIAGADIAGADIAGABQAMAAAGgIQAIgJAAgMQAAgMgIgIQgGgIgMAAQgGAAgGADgAReApQgLgFgHgJIAMgOQAMAOAUAAQAMAAAGgGQAHgHAAgIQAAgIgHgHQgGgGgMAAQgGAAgHADQgGACgHAGIgOgFIAAhDIBOAAIAAATIg6AAIAAAjQAFgFAHgDQAHgDAIAAQAHAAAJADQAGADAFAEQAGAGADAHQADAHAAAIQAAAJgDAIQgEAIgFAFQgGAEgJAEQgJADgKAAQgOAAgMgFgAJ7AoQgFgFgBgMIAAgxIgOAAIAAgQIAOAAIAAgYIATAAIAAAYIASAAIAAAQIgSAAIAAAsQAAAFACADQACADAEAAIAGgBIADgCIAFAOIgHAEQgFACgGAAQgLAAgGgGgAItAqQgJgEgFgFQgGgGgDgJQgDgHgBgLQABgKADgHQADgJAGgGQAFgFAJgEQAKgEAIAAQAHAAAFACQAEAAAFADIAHAFIAGAGIgNALQgGgKgOAAQgMAAgHAIQgHAIAAAMQAAAGACAGQACAFADAEQADADAGADQAEACAGAAQANAAAHgLIANAMQgFAGgIAFQgHAFgOAAQgIAAgKgEgAGuApQgMgFgHgIQgJgIgEgMQgEgKAAgNQAAgOAEgLQAEgMAJgIQAIgIALgFQAKgFAPAAQAOAAAKAFQALAFAJAIQAIAIAEAMQAFALAAAOQAAANgFAKQgEAMgIAIQgHAIgNAFQgKAFgOAAQgPAAgKgFgAG3g4QgIAEgFAGQgGAGgCAHQgDAJAAAJQAAAJADAHQACAHAGAGQAFAGAIAEQAHADAJAAQAIAAAIgDQAJgEAEgGQAGgGACgHQADgIgBgIQABgJgDgJQgCgHgGgGQgEgGgJgEQgIgDgIAAQgJAAgHADgAEUAqQgKgEgHgGIAJgOQACADAEACIAGAEIAJADIAIABQAIAAAGgEQADgDAAgFQAAgFgDgBQgFgDgFgBIgNgDIgMgEQgHgCgDgFQgEgFAAgIQAAgFADgGQABgEAFgEQAEgDAGgDQAJgCAGAAQAKAAAJAEQAKAEAFAEIgIAOQgDgEgIgEQgHgDgIAAQgIAAgDADQgFADAAAFQAAAEAEACIAKADIAMADQAIACAFADQAHACADAFQAEAFAAAIQAAAFgCAGQgDAEgFAFQgEADgHADQgJACgHAAQgJAAgLgEgADbAoQgGgFAAgMIAAgxIgOAAIAAgQIAOAAIAAgYIATAAIAAAYIASAAIAAAQIgSAAIAAAsQAAAEACAEQADADAEAAIAEgBIAEgCIAEAOIgGAEQgFACgHAAQgKAAgGgGgAAMAnQgHgIAAgNIAAg8IATAAIAAA1QAAAKAEAEQAGAEAIAAQAHAAAFgEQAGgCADgFIAAg8IATAAIAABVIgTAAIAAgLQgFAGgHADQgHAFgLAAQgOAAgHgHgAhMAqQgKgFgFgFQgGgHgDgHQgCgIAAgKQAAgIACgJQAEgIAFgGQAGgGAJgEQAJgEAJAAQAKAAAJAEQAHADAHAHQAFAGADAIQADAJABAIQgBAKgDAIQgCAGgGAIQgGAGgIAEQgJAEgKAAQgKAAgIgEgAhFgaIgHAHIgGAJIgBAKQAAAGABAFIAGAJIAHAHQAFACAGAAQAHAAAEgCIAIgHQADgDABgGQACgFAAgGIgCgKQgBgGgDgDIgIgHQgEgCgHAAQgGAAgFACgAilAqQgIgDgHgGQgFgGgEgJQgDgIAAgKQAAgJADgIQAEgJAFgGQAHgFAIgEQAJgEAJAAQAGAAAFACIAJADQAEACAEADIAFAGIgNALQgHgKgMAAQgNAAgGAIQgIAIAAAMIACAMQACAGAEADQAEAEAEACQAEACAHAAQAMAAAHgLIANAMQgEAGgJAFQgIAFgMAAQgJAAgJgEgAkHAqQgJgDgIgHIAJgOQADAEADABIAHAEIAIADIAIABQAIAAAGgEQAEgDAAgFQAAgFgEgBIgJgEIgOgDQgGgBgGgDQgFgCgFgFQgEgEAAgJQAAgGADgFIAGgIQAFgEAGgCQAIgCAGAAQALAAAJAEQAKAEAEAEIgIAOQgEgFgGgDQgHgDgJAAQgHAAgEADQgFADAAAFQAAAEAFACQADACAGABIANADQAGACAHADQAFACAEAFQAEAEAAAJQAAAHgCAEQgDAFgEAEQgFADgGADQgKACgGAAQgKAAgLgEgAmSArQgIgEgEgFQgGgHgCgIQgDgIAAgLQAAgJADgJQACgHAGgHQAEgGAIgDQAGgEAJAAQAIAAAIAEQAIAEAEAHIAAguIATAAIAAB3IgTAAIAAgLQgFAGgHAEQgHAEgJAAQgIAAgHgDgAmHgaQgFADgDADQgEAFgBAEQgBAGgBAFIACAMQABAEAEAFQADAEAFACQAEACAGAAIAGgBIAHgDIAFgDIAEgFIAAghIgEgFIgFgDIgHgDIgGgBQgGAAgEACgAqvAqQgHgEgGgGIAAALIgTAAIAAh3IATAAIAAAuQAFgIAIgDQAIgEAHAAQAJAAAGAEQAJADADAGQAHAHABAHQAEAJAAAJQAAALgEAIQgBAIgHAHQgEAGgIADQgHADgIAAQgJAAgGgEgAqzgYQgFADgEAFIAAAhQADAEAGAFQAGADAIAAQALAAAHgIQAGgIAAgNQAAgFgCgGIgEgJQgFgEgDgCQgEgCgGAAQgIAAgGAEgAu4AqQgJgFgFgFQgHgHgCgHQgDgIAAgKQAAgIADgJQADgIAGgGQAGgGAIgEQAJgEAJAAQAKAAAJAEQAIADAGAHQAGAGADAIQADAJAAAIQAAAKgDAIQgDAGgGAIQgFAGgJAEQgIAEgLAAQgJAAgJgEgAuwgaIgIAHQgEAEgBAFIgBAKQAAAGABAFQABAEAEAFIAIAHQAEACAGAAQAHAAAFgCIAHgHQADgDACgGQACgFgBgGQABgFgCgFQgCgGgDgDIgHgHQgFgCgHAAQgGAAgEACgAyRAoQgNgFgHgIIALgRQAHAHAJAFQAKAFAMAAQAHAAAFgCQADAAAEgDQADgDABgDIABgGQAAgGgEgDQgGgDgIgCQgGgDgLgBQgIgCgIgEQgIgEgFgHQgGgHAAgKQAAgGAEgIQADgHAGgEQAGgGAHgCQAJgDAJAAQAPAAALAFQALAEAIAIIgLAQQgIgHgJgEQgJgDgJAAQgKAAgFAEQgGAEABAHQAAAGAEADQAHAEAHABIARAEQAJADAHAEQAIADAFAHQAFAHAAAKQAAAJgDAGQgDAHgFAFQgGAFgIADQgKADgMAAQgPAAgNgGgAPfArIAAgQIAfgXQANgLAHgGQAHgIAEgGQAEgHAAgGQgBgFgCgEQgBgDgDgCIgHgEIgJgBQgJAAgJAEQgIAEgGAHIgMgOQAHgJANgGQAMgEAMAAQAKAAAHACQAIADAGAEQAGAGADAGQAEAHAAAIQAAAJgEAIQgDAHgIAJQgGAIgKAHIgWASIA1AAIAAASgAN3ArIAAgbIg6AAIAAgQIAyhMIAdAAIAABLIAQAAIAAARIgQAAIAAAbgANSgBIAlAAIAAg4gALWArIAAgQIAegXQAOgLAGgGQAHgIAFgGQADgHAAgGQAAgFgCgEQgCgDgDgCIgHgEIgIgBQgKAAgIAEQgJAEgGAHIgLgOQAHgJANgGQALgEANAAQAKAAAGACQAJADAFAEQAGAFADAHQAEAHAAAIQAAAJgEAIQgCAHgIAJQgGAIgLAHIgVASIA1AAIAAASgACmArIAAg1QAAgKgFgEQgEgEgJAAQgHAAgGAEQgHAFgCADIAAA7IgTAAIAAhVIATAAIAAALIAFgFIAIgEIAIgDQAEgCAGAAQAOAAAHAIQAHAHAAANIAAA8gAk8ArIAAhVIATAAIAABVgApmArIAAhVIATAAIAABVgAv4ArIAAg1QAAgKgFgEQgEgEgJAAQgHAAgGAEQgHAEgCAEIAAA7IgTAAIAAh3IATAAIAAAtIAFgFIAHgEQAEgDAFAAQAFgCAEAAQAPAAAGAHQAIAHgBAOIAAA8gAOmAIIAAgPIArAAIAAAPgAk6g5QgEgDABgFQgBgFAEgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAplg5QgDgDAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEg");
	this.shape.setTransform(123,12.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(4,4.2,238,15.7), null);


(lib.topBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bKKIAA0TMAu3AAAIAAUTg");
	this.shape.setTransform(150,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topBlack, new cjs.Rectangle(0,0,300,130), null);


(lib.subcta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cta
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAeQgHgDgEgFIAGgJQAEAEAGACQAEACAGAAQAHAAACgCQADgBAAgEQAAgDgDgCIgKgEIgMgDQgGgCgCgCQgDgFgBgGQAAgFADgEQADgEAGgDQAGgDAGAAQAPAAAJAJIgFAJQgEgDgFgCQgFgCgFAAQgDAAgEACQgDACAAADQAAADADACIAVAHQAEACAEACQAEAEAAAHQAAAJgHAFQgHAGgMAAQgGAAgIgDg");
	this.shape.setTransform(98.75,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAnQgEgEAAgHIAAhGIANAAIAABCQAAADABACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIADAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIADAKQgFAEgHABQgIgCgDgDg");
	this.shape_1.setTransform(94.475,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAdQgHgEgDgIQgDgHAAgKQAAgJADgHQADgGAHgGQAFgDAJAAQAFAAAFACQAFADAEAFIAAgJIANAAIAAA9IgNAAIAAgJQgEAFgFADQgEACgGAAQgJAAgFgDgAgLgOQgFAGAAAIQAAAJAFAGQAFAGAHAAQAEAAAFgDQAFgCACgEIAAgXQgDgEgEgCQgEgDgFAAQgHAAgFAGg");
	this.shape_2.setTransform(88.275,14.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAcQgIgEgEgHQgEgIAAgJQAAgHAEgJQAFgHAGgEQAIgFAIAAQAHAAAJAFQAGAEAEAHQAEAJAAAIIAAADIgvAAQAAAHAGAGQAGAEAHAAQAFAAAEgCQAFgBADgDIAHAJQgFAEgGACQgIADgGAAQgIgBgIgEgAgLgQQgEAFgBAGIAiAAIgCgHQgCgDgEgDQgEgCgFAAQgIgBgEAFg");
	this.shape_3.setTransform(81.2,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAqIAAhTIAfAAQANAAAKAFQAKAFAFAKQAGAKAAALQAAANgGAJQgFAJgKAGQgKAGgNgBgAgWAeIARAAQAHAAAHgFQAGgDAEgHQAEgHAAgIQAAgIgEgGQgDgGgHgEQgHgFgIAAIgQAAg");
	this.shape_4.setTransform(73.275,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAcQgIgEgEgHQgEgHAAgKQABgJADgHQAFgHAGgEQAIgFAHAAQAJAAAHAFQAHAEAEAHQAEAJAAAIIAAADIgvAAQABAHAFAGQAGAEAHAAQAFAAAFgCQAFgBACgDIAGAJQgEAEgGACQgIADgHAAQgHgBgIgEgAgLgQQgEAGgBAFIAiAAIgCgHQgCgDgEgDQgCgCgIAAQgGgBgFAFg");
	this.shape_5.setTransform(61.7,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOArIAAgnQAAgFgDgEQgDgDgGAAQgEAAgEADQgEACgDADIAAArIgOAAIAAhVIAOAAIAAAgQADgDAGgEQAFgCAHAAQAKAAAFAEQAFAGAAAJIAAArg");
	this.shape_6.setTransform(54.525,12.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAkQgEgEAAgIIAAgjIgLAAIAAgLIALAAIAAgRIANAAIAAARIAMAAIAAALIgMAAIAAAgQgBADACACQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIADAAIACgCIAEAKQgGAEgHAAQgIgBgDgDg");
	this.shape_7.setTransform(48.85,13.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAcQgHgEgFgHQgEgGAAgLQAAgJAEgHQAEgGAHgFQAIgFAHAAQAJAAAHAFQAHAEAEAHQAEAIAAAJIAAADIgvAAQABAHAFAGQAGAEAHAAQAFAAAEgCQAGgBACgDIAHAJQgFAEgHACQgGADgIAAQgHgBgIgEgAgLgQQgFAGAAAFIAiAAQAAgEgCgDQgBgDgFgDQgDgCgGAAQgHgBgFAFg");
	this.shape_8.setTransform(39.975,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAcQgIgEgDgHQgFgHAAgKQAAgIAFgIQADgHAIgEQAGgFAJAAQAIAAAHAFQAIAEADAHQAEAJAAAIIAAADIguAAQAAAHAFAGQAHAEAGAAQAGAAAEgCQAFgBADgDIAGAJQgFAEgHACQgHADgGAAQgIgBgIgEgAgLgQQgEAFgBAGIAiAAIgCgHQgCgDgEgDQgEgCgFAAQgIgBgEAFg");
	this.shape_9.setTransform(32.85,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAoQgKgEgFgGIAJgLQAEAFAHAEQAHADAIAAQAHAAAFgDQAFgEAAgFQAAgDgDgDQgCgCgEgBIgZgIQgGgCgFgFQgEgEAAgJQAAgGAEgHQAEgGAHgDQAGgDAJAAQAUAAAMAMIgJALQgEgFgHgCQgFgCgHgBQgHAAgEAEQgEABAAAGQAAADADACIAGADIAZAIQAGADAEAEQAFAFAAAJQAAAIgEAFQgEAHgHACQgHAEgLAAQgLAAgIgEg");
	this.shape_10.setTransform(25.425,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52823").s().p("Am3BwQgsAAgfgfQgggfAAgsIAAgLQAAgsAggfQAfgfAsAAINvAAQAsAAAfAfQAgAfAAAsIAAALQAAAsggAfQgfAfgsAAg");
	this.shape_11.setTransform(61.775,13.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subcta, new cjs.Rectangle(7.1,2.1,109.4,22.5), null);


(lib.shopbig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SUBHED
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52823").s().p("AosBMQgHgCgJgIIAJgOQAFAHAHACQAIACAIAAIAJgBIAIgEQAEgDACgEQACgFAAgHIAAgKQgFAHgHAEQgHAEgJAAQgIAAgHgDQgGgDgHgGQgFgHgDgHQgCgJAAgJQAAgKACgJQAEgIAEgGQAGgGAHgDQAHgDAIAAQAIAAAIAEQAIAEAEAHIAAgMIATAAIAABRQAAANgEAGQgEAIgGAFQgHAEgIACQgHACgIAAQgLAAgKgDgAomgUQgGAHgBANQABAMAGAHQAHAIALAAQAGAAAHgEQAFgCAEgGIAAgfQgEgGgFgCQgHgEgGAAQgLAAgHAIgAtmBNIAAh3IAUAAIAAALQAEgGAIgEQAGgEAKAAQAIAAAGADQAIADAFAGQAFAGADAJQADAIAAAKQAAALgDAIQgDAKgFAEQgFAGgIADQgGAEgIAAQgJAAgHgEQgHgEgFgHIAAAugAtJgZQgHAEgCAFIAAAhIADAFIAGADIAGADIAGABQAMAAAGgIQAIgJAAgMQAAgMgIgIQgGgIgMAAQgGAAgGADgAReApQgLgFgHgJIAMgOQAMAOAUAAQAMAAAGgGQAHgHAAgIQAAgIgHgHQgGgGgMAAQgGAAgHADQgGACgHAGIgOgFIAAhDIBOAAIAAATIg6AAIAAAjQAFgFAHgDQAHgDAIAAQAHAAAJADQAGADAFAEQAGAGADAHQADAHAAAIQAAAJgDAIQgEAIgFAFQgGAEgJAEQgJADgKAAQgOAAgMgFgAJ7AoQgFgFgBgMIAAgxIgOAAIAAgQIAOAAIAAgYIATAAIAAAYIASAAIAAAQIgSAAIAAAsQAAAFACADQACADAEAAIAGgBIADgCIAFAOIgHAEQgFACgGAAQgLAAgGgGgAItAqQgJgEgFgFQgGgGgDgJQgDgHgBgLQABgKADgHQADgJAGgGQAFgFAJgEQAKgEAIAAQAHAAAFACQAEAAAFADIAHAFIAGAGIgNALQgGgKgOAAQgMAAgHAIQgHAIAAAMQAAAGACAGQACAFADAEQADADAGADQAEACAGAAQANAAAHgLIANAMQgFAGgIAFQgHAFgOAAQgIAAgKgEgAGuApQgMgFgHgIQgJgIgEgMQgEgKAAgNQAAgOAEgLQAEgMAJgIQAIgIALgFQAKgFAPAAQAOAAAKAFQALAFAJAIQAIAIAEAMQAFALAAAOQAAANgFAKQgEAMgIAIQgHAIgNAFQgKAFgOAAQgPAAgKgFgAG3g4QgIAEgFAGQgGAGgCAHQgDAJAAAJQAAAJADAHQACAHAGAGQAFAGAIAEQAHADAJAAQAIAAAIgDQAJgEAEgGQAGgGACgHQADgIgBgIQABgJgDgJQgCgHgGgGQgEgGgJgEQgIgDgIAAQgJAAgHADgAEUAqQgKgEgHgGIAJgOQACADAEACIAGAEIAJADIAIABQAIAAAGgEQADgDAAgFQAAgFgDgBQgFgDgFgBIgNgDIgMgEQgHgCgDgFQgEgFAAgIQAAgFADgGQABgEAFgEQAEgDAGgDQAJgCAGAAQAKAAAJAEQAKAEAFAEIgIAOQgDgEgIgEQgHgDgIAAQgIAAgDADQgFADAAAFQAAAEAEACIAKADIAMADQAIACAFADQAHACADAFQAEAFAAAIQAAAFgCAGQgDAEgFAFQgEADgHADQgJACgHAAQgJAAgLgEgADbAoQgGgFAAgMIAAgxIgOAAIAAgQIAOAAIAAgYIATAAIAAAYIASAAIAAAQIgSAAIAAAsQAAAEACAEQADADAEAAIAEgBIAEgCIAEAOIgGAEQgFACgHAAQgKAAgGgGgAAMAnQgHgIAAgNIAAg8IATAAIAAA1QAAAKAEAEQAGAEAIAAQAHAAAFgEQAGgCADgFIAAg8IATAAIAABVIgTAAIAAgLQgFAGgHADQgHAFgLAAQgOAAgHgHgAhMAqQgKgFgFgFQgGgHgDgHQgCgIAAgKQAAgIACgJQAEgIAFgGQAGgGAJgEQAJgEAJAAQAKAAAJAEQAHADAHAHQAFAGADAIQADAJABAIQgBAKgDAIQgCAGgGAIQgGAGgIAEQgJAEgKAAQgKAAgIgEgAhFgaIgHAHIgGAJIgBAKQAAAGABAFIAGAJIAHAHQAFACAGAAQAHAAAEgCIAIgHQADgDABgGQACgFAAgGIgCgKQgBgGgDgDIgIgHQgEgCgHAAQgGAAgFACgAilAqQgIgDgHgGQgFgGgEgJQgDgIAAgKQAAgJADgIQAEgJAFgGQAHgFAIgEQAJgEAJAAQAGAAAFACIAJADQAEACAEADIAFAGIgNALQgHgKgMAAQgNAAgGAIQgIAIAAAMIACAMQACAGAEADQAEAEAEACQAEACAHAAQAMAAAHgLIANAMQgEAGgJAFQgIAFgMAAQgJAAgJgEgAkHAqQgJgDgIgHIAJgOQADAEADABIAHAEIAIADIAIABQAIAAAGgEQAEgDAAgFQAAgFgEgBIgJgEIgOgDQgGgBgGgDQgFgCgFgFQgEgEAAgJQAAgGADgFIAGgIQAFgEAGgCQAIgCAGAAQALAAAJAEQAKAEAEAEIgIAOQgEgFgGgDQgHgDgJAAQgHAAgEADQgFADAAAFQAAAEAFACQADACAGABIANADQAGACAHADQAFACAEAFQAEAEAAAJQAAAHgCAEQgDAFgEAEQgFADgGADQgKACgGAAQgKAAgLgEgAmSArQgIgEgEgFQgGgHgCgIQgDgIAAgLQAAgJADgJQACgHAGgHQAEgGAIgDQAGgEAJAAQAIAAAIAEQAIAEAEAHIAAguIATAAIAAB3IgTAAIAAgLQgFAGgHAEQgHAEgJAAQgIAAgHgDgAmHgaQgFADgDADQgEAFgBAEQgBAGgBAFIACAMQABAEAEAFQADAEAFACQAEACAGAAIAGgBIAHgDIAFgDIAEgFIAAghIgEgFIgFgDIgHgDIgGgBQgGAAgEACgAqvAqQgHgEgGgGIAAALIgTAAIAAh3IATAAIAAAuQAFgIAIgDQAIgEAHAAQAJAAAGAEQAJADADAGQAHAHABAHQAEAJAAAJQAAALgEAIQgBAIgHAHQgEAGgIADQgHADgIAAQgJAAgGgEgAqzgYQgFADgEAFIAAAhQADAEAGAFQAGADAIAAQALAAAHgIQAGgIAAgNQAAgFgCgGIgEgJQgFgEgDgCQgEgCgGAAQgIAAgGAEgAu4AqQgJgFgFgFQgHgHgCgHQgDgIAAgKQAAgIADgJQADgIAGgGQAGgGAIgEQAJgEAJAAQAKAAAJAEQAIADAGAHQAGAGADAIQADAJAAAIQAAAKgDAIQgDAGgGAIQgFAGgJAEQgIAEgLAAQgJAAgJgEgAuwgaIgIAHQgEAEgBAFIgBAKQAAAGABAFQABAEAEAFIAIAHQAEACAGAAQAHAAAFgCIAHgHQADgDACgGQACgFgBgGQABgFgCgFQgCgGgDgDIgHgHQgFgCgHAAQgGAAgEACgAyRAoQgNgFgHgIIALgRQAHAHAJAFQAKAFAMAAQAHAAAFgCQADAAAEgDQADgDABgDIABgGQAAgGgEgDQgGgDgIgCQgGgDgLgBQgIgCgIgEQgIgEgFgHQgGgHAAgKQAAgGAEgIQADgHAGgEQAGgGAHgCQAJgDAJAAQAPAAALAFQALAEAIAIIgLAQQgIgHgJgEQgJgDgJAAQgKAAgFAEQgGAEABAHQAAAGAEADQAHAEAHABIARAEQAJADAHAEQAIADAFAHQAFAHAAAKQAAAJgDAGQgDAHgFAFQgGAFgIADQgKADgMAAQgPAAgNgGgAPfArIAAgQIAfgXQANgLAHgGQAHgIAEgGQAEgHAAgGQgBgFgCgEQgBgDgDgCIgHgEIgJgBQgJAAgJAEQgIAEgGAHIgMgOQAHgJANgGQAMgEAMAAQAKAAAHACQAIADAGAEQAGAGADAGQAEAHAAAIQAAAJgEAIQgDAHgIAJQgGAIgKAHIgWASIA1AAIAAASgAN3ArIAAgbIg6AAIAAgQIAyhMIAdAAIAABLIAQAAIAAARIgQAAIAAAbgANSgBIAlAAIAAg4gALWArIAAgQIAegXQAOgLAGgGQAHgIAFgGQADgHAAgGQAAgFgCgEQgCgDgDgCIgHgEIgIgBQgKAAgIAEQgJAEgGAHIgLgOQAHgJANgGQALgEANAAQAKAAAGACQAJADAFAEQAGAFADAHQAEAHAAAIQAAAJgEAIQgCAHgIAJQgGAIgLAHIgVASIA1AAIAAASgACmArIAAg1QAAgKgFgEQgEgEgJAAQgHAAgGAEQgHAFgCADIAAA7IgTAAIAAhVIATAAIAAALIAFgFIAIgEIAIgDQAEgCAGAAQAOAAAHAIQAHAHAAANIAAA8gAk8ArIAAhVIATAAIAABVgApmArIAAhVIATAAIAABVgAv4ArIAAg1QAAgKgFgEQgEgEgJAAQgHAAgGAEQgHAEgCAEIAAA7IgTAAIAAh3IATAAIAAAtIAFgFIAHgEQAEgDAFAAQAFgCAEAAQAPAAAGAHQAIAHgBAOIAAA8gAOmAIIAAgPIArAAIAAAPgAk6g5QgEgDABgFQgBgFAEgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAplg5QgDgDAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEg");
	this.shape.setTransform(123,12.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shopbig, new cjs.Rectangle(4,3.1,238,16.799999999999997), null);


(lib.Scene_1_border = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.prod3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.packnew();
	this.instance.setTransform(59,-190,0.816,0.816);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prod3, new cjs.Rectangle(59,-190,217.89999999999998,270.1), null);


(lib.prod2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pack3();
	this.instance.setTransform(92.55,115,0.6887,0.6887,-21.9582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prod2, new cjs.Rectangle(92.6,84.6,112.9,123.70000000000002), null);


(lib.prod1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pack1();
	this.instance.setTransform(65,-120,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.prod1, new cjs.Rectangle(65,-120,113.9,280.8), null);


(lib.petsmart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAWQgJgKAAgMQAAgNAKgJQAJgJAMAAQANAAAKAKQAJAJAAAMQgBANgJAKQgKAJgMAAQgNgBgJgJgAgKgVQgIAFgDAIIAAAIIAAAAQAMgTAVAAIAAAAIgHgEIgFgBQgFAAgFADg");
	this.shape.setTransform(88.8416,10.6153,2.2577,2.2577);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1A4IAPgkQAOALATAAQALABAAgIQAAgFgKgCIgJgCQgPgDgJgIQgKgJABgOQAAgXASgNQAQgNAWAAQATAAAWAKIgMAgQgPgGgOAAQgKAAAAAHQAAADADACIARAEQAiAHAAAdQgBAXgSANQgQANgWAAQgbAAgXgNg");
	this.shape_1.setTransform(78.0648,39.2908,2.2577,2.2577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHgAgEAAQAAAGAEAAQAGAAAAgGQAAgFgGAAQgEAAAAAFgAACAEIgBgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIAAAAIAAADIgBAAIAAgHIABAAIACABIABABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACgAAAAAIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAAAg");
	this.shape_2.setTransform(196.4234,51.1437,2.2577,2.2577);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWg+IApgBIAoB8IglAAIgFgNIgiABIgDANIglACgAAIAUIgJggIgIAgIARAAg");
	this.shape_3.setTransform(139.6989,33.9288,2.2577,2.2577);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGA9IgVgjIAAAgIgogCIABh7IA2ADQATACANAMQAPANgBAXQAAAdgUAIIAeAsIgygGgAgOgDIAEAAQAMAAAAgMQAAgHgDgDQgEgDgFAAIgEgBg");
	this.shape_4.setTransform(167.1863,34.9448,2.2577,2.2577);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6g3IAngGIAUA3IAWg8IAngEIALB6IgqAEIgDgsIgSAuIgSADIgRgsIgEAvIgrAHg");
	this.shape_5.setTransform(108.3735,36.5816,2.2577,2.2577);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyA/IABiDIA1AKQAvAGAAApQAAAwgvgEIgOgCIAAAmIgogGgAgJABIAEAAQAMACAAgNQAAgMgMgCIgEAAg");
	this.shape_6.setTransform(8.3584,35.4528,2.2577,2.2577);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA9IABhXIgYgCIAAgmQAsACAtAIIAAAnIgXgEIgBBYQgLgCgfgEg");
	this.shape_7.setTransform(189.5939,37.146,2.2577,2.2577);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWA/IAAhaIgWgBIAAghQAqACAvgDIAAAiIgXABIABBZIgXABIgWAAg");
	this.shape_8.setTransform(52.4956,40.4648,2.2577,2.2577);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA9IACh9QAqAFAmABIAAAfIgmgCIAAARIAkABIAAAcIgkgBIAAASIAnABIgBAeQggAAgygEg");
	this.shape_9.setTransform(30.7089,39.6295,2.2577,2.2577);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAKQAPggAegQIAAAFQABAKAHAHQgbAIgTAYIgPAXQABgNAHgQg");
	this.shape_10.setTransform(73.8872,20.3827,2.2577,2.2577);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAzgCQhDgphVAaQBlg0A8A0QAfAZALAkQgRgagigUg");
	this.shape_11.setTransform(42.9004,15.6697,2.2577,2.2577);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.petsmart, new cjs.Rectangle(-3.1,3,203.1,52), null);


(lib.over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52823").s().p("AgOAeQgHgDgEgFIAGgJQAEAEAGACQAEACAGAAQAHAAACgCQADgBAAgEQAAgDgDgCIgKgEIgMgDQgGgCgCgCQgDgFgBgGQAAgFADgEQADgEAGgDQAGgDAGAAQAPAAAJAJIgFAJQgEgDgFgCQgFgCgFAAQgDAAgEACQgDACAAADQAAADADACIAVAHQAEACAEACQAEAEAAAHQAAAJgHAFQgHAGgMAAQgGAAgIgDg");
	this.shape.setTransform(91.65,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52823").s().p("AgJAnQgEgEAAgHIAAhGIANAAIAABCQAAADABACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIADAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIADAKQgFAEgHABQgIgCgDgDg");
	this.shape_1.setTransform(87.375,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52823").s().p("AgQAdQgHgEgDgIQgDgHAAgKQAAgJADgHQADgGAHgGQAFgDAJAAQAFAAAFACQAFADAEAFIAAgJIANAAIAAA9IgNAAIAAgJQgEAFgFADQgEACgGAAQgJAAgFgDgAgLgOQgFAGAAAIQAAAJAFAGQAFAGAHAAQAEAAAFgDQAFgCACgEIAAgXQgDgEgEgCQgEgDgFAAQgHAAgFAGg");
	this.shape_2.setTransform(81.175,12.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52823").s().p("AgOAcQgIgEgEgHQgEgIAAgJQAAgHAEgJQAFgHAGgEQAIgFAIAAQAHAAAJAFQAGAEAEAHQAEAJAAAIIAAADIgvAAQAAAHAGAGQAGAEAHAAQAFAAAEgCQAFgBADgDIAHAJQgFAEgGACQgIADgGAAQgIgBgIgEgAgLgQQgEAFgBAGIAiAAIgCgHQgCgDgEgDQgEgCgFAAQgIgBgEAFg");
	this.shape_3.setTransform(74.1,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52823").s().p("AglAqIAAhTIAfAAQANAAAKAFQAKAFAFAKQAGAKAAALQAAANgGAJQgFAJgKAGQgKAGgNgBgAgWAeIARAAQAHAAAHgFQAGgDAEgHQAEgHAAgIQAAgIgEgGQgDgGgHgEQgHgFgIAAIgQAAg");
	this.shape_4.setTransform(66.175,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52823").s().p("AgOAcQgIgEgEgHQgEgHAAgKQABgJADgHQAFgHAGgEQAIgFAHAAQAJAAAHAFQAHAEAEAHQAEAJAAAIIAAADIgvAAQABAHAFAGQAGAEAHAAQAFAAAFgCQAFgBACgDIAGAJQgEAEgGACQgIADgHAAQgHgBgIgEgAgLgQQgEAGgBAFIAiAAIgCgHQgCgDgEgDQgCgCgIAAQgGgBgFAFg");
	this.shape_5.setTransform(54.6,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52823").s().p("AAOArIAAgnQAAgFgDgEQgDgDgGAAQgEAAgEADQgEACgDADIAAArIgOAAIAAhVIAOAAIAAAgQADgDAGgEQAFgCAHAAQAKAAAFAEQAFAGAAAJIAAArg");
	this.shape_6.setTransform(47.425,10.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52823").s().p("AgEAkQgEgEAAgIIAAgjIgLAAIAAgLIALAAIAAgRIANAAIAAARIAMAAIAAALIgMAAIAAAgQgBADACACQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIADAAIACgCIAEAKQgGAEgHAAQgIgBgDgDg");
	this.shape_7.setTransform(41.75,11.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52823").s().p("AgOAcQgHgEgFgHQgEgGAAgLQAAgJAEgHQAEgGAHgFQAIgFAHAAQAJAAAHAFQAHAEAEAHQAEAIAAAJIAAADIgvAAQABAHAFAGQAGAEAHAAQAFAAAEgCQAGgBACgDIAHAJQgFAEgHACQgGADgIAAQgHgBgIgEgAgLgQQgFAGAAAFIAiAAQAAgEgCgDQgBgDgFgDQgDgCgGAAQgHgBgFAFg");
	this.shape_8.setTransform(32.875,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52823").s().p("AgOAcQgIgEgDgHQgFgHAAgKQAAgIAFgIQADgHAIgEQAGgFAJAAQAIAAAHAFQAIAEADAHQAEAJAAAIIAAADIguAAQAAAHAFAGQAHAEAGAAQAGAAAEgCQAFgBADgDIAGAJQgFAEgHACQgHADgGAAQgIgBgIgEgAgLgQQgEAFgBAGIAiAAIgCgHQgCgDgEgDQgEgCgFAAQgIgBgEAFg");
	this.shape_9.setTransform(25.75,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52823").s().p("AgSAoQgKgEgFgGIAJgLQAEAFAHAEQAHADAIAAQAHAAAFgDQAFgEAAgFQAAgDgDgDQgCgCgEgBIgZgIQgGgCgFgFQgEgEAAgJQAAgGAEgHQAEgGAHgDQAGgDAJAAQAUAAAMAMIgJALQgEgFgHgCQgFgCgHgBQgHAAgEAEQgEABAAAGQAAADADACIAGADIAZAIQAGADAEAEQAFAFAAAJQAAAIgEAFQgEAHgHACQgHAEgLAAQgLAAgIgEg");
	this.shape_10.setTransform(18.325,10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Am3BwQgsAAgfgfQgggfAAgsIAAgLQAAgsAggfQAfgfAsAAINvAAQAsAAAfAfQAgAfAAAsIAAALQAAAsggAfQgfAfgsAAg");
	this.shape_11.setTransform(54.675,11.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.over, new cjs.Rectangle(0,0,109.4,22.5), null);


(lib.imgMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img1();
	this.instance.setTransform(85,59,0.3096,0.3096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85,59,185.2,266.3);


(lib.click_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.circleEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52823").s().p("A69MRQAuq5IGm4QH9mwLfAAQIXAAHBEIQG1ECDeGqIAAJtg");
	this.shape.setTransform(205.875,111.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circleEnd, new cjs.Rectangle(33.3,33.5,345.2,157), null);


(lib.black2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBkQgHgIAAgKQAAgLAHgHQAHgIAKAAQALAAAHAIQAIAHAAALQAAAKgIAIQgHAHgLAAQgKAAgHgHgAgRAjIgHiNIAwAAIgGCNg");
	this.shape.setTransform(267.95,12.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBiQgPgJgJgSQgJgTAAgZQAAgYAJgRQAJgTAPgJQAQgKATAAQANAAAMAGQAMAFAJAMIAAhOIApAAIAADTIgpAAIAAgUQgIAKgNAIQgMAGgNAAQgUAAgPgKgAgZgEQgKALAAAUQAAAUAKANQAMAMAPAAQALAAAJgFQAKgFAFgIIAAg2QgGgHgJgEQgJgFgLAAQgQAAgLAMg");
	this.shape_1.setTransform(254.125,12.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBPIAAhcQAAgPgHgHQgHgGgOgBQgKAAgJAGQgIAEgHAIIAABnIgoAAIAAiYIAoAAIAAAUQAJgLANgGQAOgIARAAQAYABANANQANANAAAXIAABrg");
	this.shape_2.setTransform(236.175,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBHQgTgLgKgRQgLgTAAgYQAAgWAKgRQAKgTASgLQASgKAWgBQAXAAARALQASAMAJASQAKATAAAYIAAAIIhxAAQACAPAMALQAMAKARAAQALAAAMgEQALgEAHgGIASAaQgNAKgPAFQgSAFgRABQgWAAgTgKgAgYglQgKAJgBAOIBKAAQgBgMgJgLQgKgKgSAAQgQAAgJAKg");
	this.shape_3.setTransform(218.275,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBqIgng7IgTATIAAAoIgoAAIAAjTIAoAAIAAB+IA5hDIAyAAIg9BEIA/BUg");
	this.shape_4.setTransform(202.675,12.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBHQgTgLgKgRQgLgTAAgYQAAgVAKgSQALgUARgKQASgKAWgBQAXAAARALQASAMAJASQAKATAAAYIAAAIIhxAAQACAQAMAKQAMAKARAAQALAAAMgEQALgEAHgGIASAaQgNAKgPAFQgSAFgRABQgWAAgTgKgAgYglQgKAJgBAOIBKAAQgBgNgJgKQgKgKgSAAQgPAAgKAKg");
	this.shape_5.setTransform(184.475,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBHQgSgKgLgSQgLgUAAgXQAAgWAKgRQALgTARgLQASgKAXgBQAVAAASALQASAMAJASQAKATAAAYIAAAIIhwAAQABAQAMAKQAMAKARAAQAKAAANgEQAMgEAGgGIASAaQgMAKgQAFQgRAFgSABQgWAAgTgKgAgYglQgJAJgDAOIBLAAQgBgMgJgLQgJgKgSAAQgRAAgJAKg");
	this.shape_6.setTransform(166.95,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBNIghhoIgfBoIgrAAIgviYIAqAAIAdBlIAhhlIAjAAIAiBlIAchlIAqAAIgvCYg");
	this.shape_7.setTransform(145.975,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBKQgSgGgMgMIARgcQAKAJAOAGQAPAHANAAQAMgBAHgEQAHgEAAgHQAAgHgIgEQgIgFgOgCQgSgEgMgEQgNgEgIgJQgJgJAAgSQAAgMAHgLQAIgLAOgHQAPgGASgBQAjABAaAUIgQAcQgHgHgMgGQgMgEgOAAQgKAAgHADQgGAEAAAGQAAAIAHACQAGADAPAEQATAEAMAEQAMAFAJAIQAJALAAARQAAAPgHAKQgJAMgOAGQgPAGgVABQgTgBgSgGg");
	this.shape_8.setTransform(117.975,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBwIAAiYIAoAAIAACYgAgQhGQgHgIAAgJQAAgKAHgHQAHgHAJAAQALAAAGAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_9.setTransform(106.55,11.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBqIAAhdQAAgOgIgHQgHgGgOAAQgKAAgJAFQgIAFgHAHIAABnIgoAAIAAjTIAoAAIAABPQAJgLANgGQAOgHARAAQAZAAANANQAMAMAAAXIAABsg");
	this.shape_10.setTransform(93.4,12.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBZQgLgLAAgVIAAhPIgZAAIAAgiIAZAAIAAgqIAoAAIAAAqIAfAAIAAAiIgfAAIAABFQAAAIADAEQAEAEAHAAIAIAAIAGgDIAIAeQgLAKgWAAQgVAAgLgLg");
	this.shape_11.setTransform(78.875,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBZQgLgLAAgVIAAhPIgZAAIAAgiIAZAAIAAgqIAoAAIAAAqIAfAAIAAAiIgfAAIAABFQAAAIAEAEQADAEAHAAIAIAAIAFgDIAJAeQgLAKgWAAQgVAAgLgLg");
	this.shape_12.setTransform(60.05,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBPIAAiYIApAAIAAAVQAHgLANgHQAOgIANAAIAAAoIgLgCQgIABgNAFQgMAFgDAHIAABlg");
	this.shape_13.setTransform(49.75,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsBHQgPgJgJgSQgJgTAAgZQAAgXAJgTQAJgSAPgKQAQgKATAAQANAAAMAHQAMAFAJAMIAAgTIApAAIAACYIgpAAIAAgVQgIALgNAHQgMAHgNAAQgUgBgPgJgAgZgfQgKAMAAATQAAAUAKANQAMAMAPgBQALAAAJgEQAKgFAFgIIAAg1QgFgHgKgFQgLgGgJAAQgPAAgMANg");
	this.shape_14.setTransform(33.525,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBZQgLgLAAgVIAAhPIgZAAIAAgiIAZAAIAAgqIAoAAIAAAqIAfAAIAAAiIgfAAIAABFQAAAHAEAFQAEAEAGAAIAIAAIAGgDIAIAeQgLAKgWAAQgVAAgLgLg");
	this.shape_15.setTransform(19.375,13.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkBKQgRgGgOgMIASgcQAJAJAPAGQAPAHANAAQANgBAGgEQAHgEAAgHQAAgHgIgEQgIgFgOgCQgSgEgMgEQgNgEgIgJQgJgKAAgRQAAgMAHgLQAIgLAOgHQAPgGASgBQAkABAZAUIgQAcQgGgHgOgGQgLgEgOAAQgLAAgFADQgHAEAAAGQAAAIAHACQAGAEAPADQAUAFALADQALAFAKAIQAKALAAARQAAAPgJAKQgHAMgPAGQgOAGgWABQgTgBgSgGg");
	this.shape_16.setTransform(6.3,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black2, new cjs.Rectangle(-0.4,-0.9,270.9,24.2), null);


(lib.black1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBKQgTgIgMgJIASgcQAIAHAQAHQAQAGAMAAQANAAAGgEQAGgDABgJQgBgGgHgEQgJgEgNgEQgTgDgMgFQgLgDgJgJQgJgJAAgRQAAgNAHgMQAIgLAOgGQANgHAUAAQAiAAAcAWIgRAbQgIgIgLgFQgOgFgMAAQgKAAgHAEQgGAEgBAGQAAAHAIAEQAFACAQAEQAOADARAEQAMAFAJAKQAJAJAAASQAAANgIANQgGAKgQAHQgRAHgTgBQgRABgUgHg");
	this.shape.setTransform(259.3,15.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBhQgLgLAAgUIAAitIAnAAIAACiQAAAIAEAEQADAFAHAAQAFAAADgCQAEgBACgCIAIAfQgLAKgWAAQgTAAgMgLg");
	this.shape_1.setTransform(248.275,12.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBGQgPgJgJgSQgJgSAAgZQAAgYAJgRQAIgSAQgLQAPgKAUAAQANABAMAFQAOAIAHAKIAAgUIApAAIAACYIgpAAIAAgTQgIAKgNAHQgNAHgMgBQgTAAgQgKgAgYgfQgLANAAASQAAAUALAMQAKAMARAAQAKAAAKgEQAJgFAFgIIAAg1QgFgIgJgEQgKgFgKgBQgRAAgKANg");
	this.shape_2.setTransform(232.675,15.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBGQgTgKgLgSQgKgSAAgYQAAgVAKgTQALgRARgMQATgLAVAAQAXAAARALQASAKAJAUQAKATAAAYIAAAJIhxAAQADAPALAKQAMALARAAQALgBALgEQAKgDAJgIIASAaQgLAKgRAGQgRAFgSAAQgWAAgTgKgAgZgmQgJALgBANIBKAAQAAgNgKgKQgJgLgTAAQgPAAgLAKg");
	this.shape_3.setTransform(215.2,15.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBiQgPgJgJgTQgJgSAAgZQAAgYAJgRQAIgSAQgLQAPgJAUAAQANAAAMAGQANAGAIALIAAhOIApAAIAADSIgpAAIAAgTQgJALgMAGQgOAHgLAAQgTAAgQgKgAgZgEQgKAMAAATQAAAUAKAMQALANAQAAQALAAAJgFQAJgEAGgJIAAg2QgFgGgKgGQgLgFgJAAQgPAAgMANg");
	this.shape_4.setTransform(196.625,12.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBVIASgdQAIAJAMAFQAOAFAMAAQATAAALgLQAKgJAAgUIAAgQQgJAKgNAHQgOAHgRAAQgYAAgNgNQgMgNAAgVIAAhnIAoAAIAABXQAAAPAIAFQAGAHAOAAQALAAAIgFQAKgEAFgIIAAhhIApAAIAACMQAAAkgWATQgXATgkAAQgmABgagXg");
	this.shape_5.setTransform(170.475,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBGQgPgIgJgTQgJgTAAgYQAAgXAJgSQAIgSAQgLQAPgKAUAAQANABAMAFQANAHAIALIAAgUIApAAIAACYIgpAAIAAgTQgJALgMAGQgOAHgLgBQgTAAgQgKgAgZgfQgKAMAAATQAAAUAKAMQALAMAQAAQALAAAJgEQAJgFAGgIIAAg1QgGgIgJgEQgJgFgLgBQgPAAgMANg");
	this.shape_6.setTransform(151.625,15.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBiQgPgJgJgTQgJgRAAgaQAAgZAJgQQAIgSAQgLQAPgJAUAAQANAAAMAGQANAGAIALIAAhOIApAAIAADSIgpAAIAAgTQgJAMgMAFQgNAHgMAAQgTAAgQgKgAgZgEQgKAMAAATQAAAUAKAMQALANAQAAQALAAAJgFQAJgEAGgJIAAg2QgFgGgKgGQgLgFgJAAQgQAAgLANg");
	this.shape_7.setTransform(133.075,12.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBwIAAiYIAnAAIAACYgAgQhGQgHgGAAgLQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgGAHgLAAQgJAAgHgHg");
	this.shape_8.setTransform(120.25,11.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBOIAAiYIApAAIAAAVQAGgKAOgHQANgHAOAAIAAAnIgLgBQgLAAgKAFQgLAFgEAHIAABkg");
	this.shape_9.setTransform(111.3,15.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhKBpIAAjRICVAAIAAAmIhoAAIAAAuIBmAAIAAAmIhmAAIAABXg");
	this.shape_10.setTransform(96.325,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBpIgng6IgSATIAAAnIgpAAIAAjRIApAAIAAB9IA5hEIAxAAIg9BFIA/BTg");
	this.shape_11.setTransform(71.175,12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBGQgSgLgLgSQgKgSAAgXQAAgWAKgTQALgSASgKQATgLAXAAQAVAAAPAIQAQAIAIAMIgaAYQgMgQgVAAQgRAAgLANQgNAMAAATQAAAUANAMQALAMARAAQALABAHgFQAIgDAHgJIAaAYQgIAMgQAIQgQAIgUAAQgXAAgTgKg");
	this.shape_12.setTransform(54,15.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBGQgPgIgJgTQgJgSAAgZQAAgYAJgRQAIgSAQgLQAPgKAUAAQANABAMAFQANAHAIALIAAgUIApAAIAACYIgpAAIAAgTQgJALgMAGQgNAHgMgBQgTAAgQgKgAgYgfQgLAMAAATQAAAVALALQAKAMAQAAQALAAAJgEQAJgFAGgIIAAg1QgGgIgJgEQgJgFgLgBQgQAAgKANg");
	this.shape_13.setTransform(36.125,15.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBhQgLgLAAgUIAAitIAnAAIAACiQAAAIAEAEQADAFAHAAQAFAAADgCQAEgBACgCIAIAfQgLAKgWAAQgTAAgMgLg");
	this.shape_14.setTransform(23.725,12.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhXBpIAAjRIBuAAQAUAAAOAHQAOAIAGAMQAHAMAAAOQAAAUgKAMQgLANgPADQARADAMAOQALAQAAASQAAAZgQARQgQAPgeAAgAgqBDIA5AAQAMABAIgIQAHgGAAgMQAAgJgHgJQgIgGgMAAIg5AAgAgqgUIA4AAQAKABAIgHQAGgGAAgLQAAgKgHgGQgHgIgKAAIg4AAg");
	this.shape_15.setTransform(7.8,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black1, new cjs.Rectangle(-1,0.8,267.1,28.599999999999998), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_topBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// topBG
	this.instance = new lib.topBlack();
	this.instance.setTransform(150,-87.5,1,1,0,0,0,150,62.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({y:47.5},16,cjs.Ease.quintOut).wait(212));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shopWhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shopWhite
	this.instance = new lib.white();
	this.instance.setTransform(148,93.5,1,1,0,0,0,136.4,9.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161).to({_off:false},0).to({alpha:1},6).wait(9).to({alpha:0},5).to({_off:true},1).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_shopbig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shopbig
	this.instance = new lib.shopbig();
	this.instance.setTransform(148,283.5,1,1,0,0,0,136.4,9.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({y:93.5},39,cjs.Ease.quintOut).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_redCircle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// redCircle
	this.instance = new lib.circleEnd();
	this.instance.setTransform(207.5,443.5,0.5,0.5,0,0,0,186.5,93);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).to({y:203.5},39,cjs.Ease.quintOut).wait(145));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_prod3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// prod3
	this.instance = new lib.prod3();
	this.instance.setTransform(179.5,474.5,0.5,0.5,0,0,0,117,47);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).to({y:234.5},39,cjs.Ease.quintOut).wait(144));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_prod2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// prod2
	this.instance = new lib.prod2();
	this.instance.setTransform(245.5,446.5,0.5,0.5,0,0,0,91,117);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({y:206.5},39,cjs.Ease.quintOut).wait(142));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_prod1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// prod1
	this.instance = new lib.prod1();
	this.instance.setTransform(209,457.5,0.5,0.5,0,0,0,62,107);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({_off:false},0).to({y:217.5},39,cjs.Ease.quintOut).wait(143));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo1
	this.instance = new lib.petsmart();
	this.instance.setTransform(257.3,232,0.3391,0.3391,0,0,0,101.2,26.2);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.petsmart();
	this.instance.setTransform(66.5,404,0.5,0.5,0,0,0,101,26);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({regY:26.1,scaleX:0.475,scaleY:0.475,x:72.45,y:164},39,cjs.Ease.quintOut).wait(146));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_imgMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// imgMC
	this.instance = new lib.imgMC("synched",0,false);
	this.instance.setTransform(148.75,100.3,1.6203,1.6202,0,0,0,176.8,173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:176.6,regY:173.6,scaleX:3.0041,scaleY:3.0041,x:148.3,y:143.45,startPosition:90},90,cjs.Ease.quadInOut).wait(24).to({regX:177,regY:174,scaleX:3.9858,scaleY:3.9858,x:148.2,y:198.2,startPosition:117},0).to({_off:true},1).wait(185));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_click_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// click_btn
	this.click_btn = new lib.click_btn();
	this.click_btn.name = "click_btn";
	this.click_btn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.click_btn, 0, 1, 2, false, new lib.click_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click_btn).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_botBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// botBG
	this.instance = new lib.topBlack();
	this.instance.setTransform(150,342.5,1,1,0,0,0,150,62.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({regY:64.8,scaleY:1.1537,y:187.6},16,cjs.Ease.quintOut).wait(212));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_black2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// black2
	this.instance = new lib.black2();
	this.instance.setTransform(150.05,87.45,1,1,0,0,0,135.7,11);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({y:127.45},18,cjs.Ease.quintOut).wait(15).to({y:57.45},39,cjs.Ease.quintOut).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_black1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// black1
	this.instance = new lib.black1();
	this.instance.setTransform(150.05,137.85,1,1,0,0,0,133.8,14);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({y:97.85},18,cjs.Ease.quintOut).wait(15).to({y:27.85},39,cjs.Ease.quintOut).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {on:1,off:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Layer_3
	this.instance = new lib.over();
	this.instance.setTransform(61.7,13.3,1,1,0,0,0,54.6,11.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},8,cjs.Ease.cubicInOut).to({alpha:0},9,cjs.Ease.cubicInOut).wait(1));

	// Layer_1
	this.instance_1 = new lib.subcta();
	this.instance_1.setTransform(59.5,13,1,1,0,0,0,59.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9,cjs.Ease.cubicInOut).to({alpha:1},9,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,2.1,109.4,22.5);


(lib.Scene_1_cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(68.65,316.55,1,1,0,0,0,59.5,13);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(72).to({_off:false},0).wait(42).to({y:126.55},39,cjs.Ease.quintOut).wait(147));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,72,114,153,299];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		if(this.click_btn.parent == undefined || this.click_btn.parent == this)
		this.click_btn = this.click_btn.click_btn;
		var frequency=10;
		stage.enableMouseOver(frequency);
		_this = this;
		
		_this.click_btn.addEventListener('click', linkM);
		function linkM() {
				// actions
		}
		
		
		_this.click_btn.addEventListener('mouseover', linkN);
		function linkN() {
				 _this.cta.gotoAndPlay("on");
		}
			
		_this.click_btn.addEventListener('mouseout', linkO);
		function linkO() {
			_this.cta.gotoAndPlay("off");
		
		}
	}
	this.frame_72 = function() {
		if(this.cta.parent == undefined || this.cta.parent == this)
		this.cta = this.cta.cta;
	}
	this.frame_114 = function() {
		if(this.cta.parent == undefined || this.cta.parent == this)
		this.cta = this.cta.cta;
	}
	this.frame_153 = function() {
		if(this.cta.parent == undefined || this.cta.parent == this)
		this.cta = this.cta.cta;
	}
	this.frame_299 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(42).call(this.frame_114).wait(39).call(this.frame_153).wait(146).call(this.frame_299).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(150,125);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({scaleX:0.9524,scaleY:0.9524,x:150.05,y:125.05},93).to({scaleX:1,scaleY:1,x:150,y:125},50,cjs.Ease.quadOut).wait(157));

	// click_btn_obj_
	this.click_btn = new lib.Scene_1_click_btn();
	this.click_btn.name = "click_btn";
	this.click_btn.setTransform(150,125,1,1,0,0,0,150,125);
	this.click_btn.depth = 0;
	this.click_btn.isAttachedToCamera = 1
	this.click_btn.isAttachedToMask = 0
	this.click_btn.layerDepth = 0
	this.click_btn.layerIndex = 0
	this.click_btn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.click_btn).wait(300));

	// border_obj_
	this.border = new lib.Scene_1_border();
	this.border.name = "border";
	this.border.setTransform(150,125,1,1,0,0,0,150,125);
	this.border.depth = 0;
	this.border.isAttachedToCamera = 1
	this.border.isAttachedToMask = 0
	this.border.layerDepth = 0
	this.border.layerIndex = 1
	this.border.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.border).wait(300));

	// prod2_obj_
	this.prod2 = new lib.Scene_1_prod2();
	this.prod2.name = "prod2";
	this.prod2.depth = 0;
	this.prod2.isAttachedToCamera = 0
	this.prod2.isAttachedToMask = 0
	this.prod2.layerDepth = 0
	this.prod2.layerIndex = 2
	this.prod2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.prod2).wait(119).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(142));

	// prod1_obj_
	this.prod1 = new lib.Scene_1_prod1();
	this.prod1.name = "prod1";
	this.prod1.depth = 0;
	this.prod1.isAttachedToCamera = 0
	this.prod1.isAttachedToMask = 0
	this.prod1.layerDepth = 0
	this.prod1.layerIndex = 3
	this.prod1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.prod1).wait(118).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(143));

	// prod3_obj_
	this.prod3 = new lib.Scene_1_prod3();
	this.prod3.name = "prod3";
	this.prod3.depth = 0;
	this.prod3.isAttachedToCamera = 0
	this.prod3.isAttachedToMask = 0
	this.prod3.layerDepth = 0
	this.prod3.layerIndex = 4
	this.prod3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.prod3).wait(117).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(144));

	// redCircle_obj_
	this.redCircle = new lib.Scene_1_redCircle();
	this.redCircle.name = "redCircle";
	this.redCircle.depth = 0;
	this.redCircle.isAttachedToCamera = 0
	this.redCircle.isAttachedToMask = 0
	this.redCircle.layerDepth = 0
	this.redCircle.layerIndex = 5
	this.redCircle.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.redCircle).wait(116).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(145));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 6
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(115).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(146));

	// cta_obj_
	this.cta = new lib.Scene_1_cta();
	this.cta.name = "cta";
	this.cta.depth = 0;
	this.cta.isAttachedToCamera = 0
	this.cta.isAttachedToMask = 0
	this.cta.layerDepth = 0
	this.cta.layerIndex = 7
	this.cta.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(114).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(147));

	// shopWhite_obj_
	this.shopWhite = new lib.Scene_1_shopWhite();
	this.shopWhite.name = "shopWhite";
	this.shopWhite.depth = 0;
	this.shopWhite.isAttachedToCamera = 0
	this.shopWhite.isAttachedToMask = 0
	this.shopWhite.layerDepth = 0
	this.shopWhite.layerIndex = 8
	this.shopWhite.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shopWhite).wait(300));

	// shopbig_obj_
	this.shopbig = new lib.Scene_1_shopbig();
	this.shopbig.name = "shopbig";
	this.shopbig.depth = 0;
	this.shopbig.isAttachedToCamera = 0
	this.shopbig.isAttachedToMask = 0
	this.shopbig.layerDepth = 0
	this.shopbig.layerIndex = 9
	this.shopbig.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shopbig).wait(113).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(148));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_80 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_81 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_82 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_83 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_84 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_85 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_86 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_87 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_88 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_89 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_90 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_91 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_92 = new cjs.Graphics().p("A54EXIAAotMAzxAAAIAAItg");
	var mask_graphics_93 = new cjs.Graphics().p("A7LElIAApJMA2XAAAIAAJJg");
	var mask_graphics_94 = new cjs.Graphics().p("A7LElIAApJMA2XAAAIAAJJg");
	var mask_graphics_95 = new cjs.Graphics().p("A7LElIAApJMA2XAAAIAAJJg");
	var mask_graphics_96 = new cjs.Graphics().p("A7LElIAApJMA2XAAAIAAJJg");
	var mask_graphics_97 = new cjs.Graphics().p("A7LElIAApJMA2XAAAIAAJJg");
	var mask_graphics_98 = new cjs.Graphics().p("A7LElIAApJMA2XAAAIAAJJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_graphics_80,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_81,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_82,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_83,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_84,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_85,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_86,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_87,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_88,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_89,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_90,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_91,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_92,x:149.5,y:142.925}).wait(1).to({graphics:mask_graphics_93,x:149.475,y:143.775}).wait(1).to({graphics:mask_graphics_94,x:149.475,y:143.775}).wait(1).to({graphics:mask_graphics_95,x:149.475,y:143.775}).wait(1).to({graphics:mask_graphics_96,x:149.475,y:143.775}).wait(1).to({graphics:mask_graphics_97,x:149.475,y:143.775}).wait(1).to({graphics:mask_graphics_98,x:149.475,y:143.775}).wait(1).to({graphics:null,x:0,y:0}).wait(201));

	// black2_obj_
	this.black2 = new lib.Scene_1_black2();
	this.black2.name = "black2";
	this.black2.depth = 0;
	this.black2.isAttachedToCamera = 0
	this.black2.isAttachedToMask = 0
	this.black2.layerDepth = 0
	this.black2.layerIndex = 10
	this.black2.maskLayerName = 0

	var maskedShapeInstanceList = [this.black2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.black2).wait(80).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},18,cjs.Ease.quintOut).wait(15).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(148));

	// Layer_12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_80 = new cjs.Graphics().p("A5zI8IAAnUMAznAAAIAAHUg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A5zDqIAAnTMAznAAAIAAHTg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A7GD2IAAnrMA2NAAAIAAHrg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A7GD2IAAnrMA2NAAAIAAHrg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A7GD2IAAnrMA2NAAAIAAHrg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A7GD2IAAnrMA2NAAAIAAHrg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A7GD2IAAnrMA2NAAAIAAHrg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A7GD2IAAnrMA2NAAAIAAHrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_1_graphics_80,x:149.6,y:57.225}).wait(1).to({graphics:mask_1_graphics_81,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_82,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_83,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_84,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_85,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_86,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_87,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_88,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_89,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_90,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_91,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_92,x:149.6,y:91.025}).wait(1).to({graphics:mask_1_graphics_93,x:149.575,y:89.275}).wait(1).to({graphics:mask_1_graphics_94,x:149.575,y:89.275}).wait(1).to({graphics:mask_1_graphics_95,x:149.575,y:89.275}).wait(1).to({graphics:mask_1_graphics_96,x:149.575,y:89.275}).wait(1).to({graphics:mask_1_graphics_97,x:149.575,y:89.275}).wait(1).to({graphics:mask_1_graphics_98,x:149.575,y:89.275}).wait(1).to({graphics:null,x:0,y:0}).wait(201));

	// black1_obj_
	this.black1 = new lib.Scene_1_black1();
	this.black1.name = "black1";
	this.black1.depth = 0;
	this.black1.isAttachedToCamera = 0
	this.black1.isAttachedToMask = 0
	this.black1.layerDepth = 0
	this.black1.layerIndex = 11
	this.black1.maskLayerName = 0

	var maskedShapeInstanceList = [this.black1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.black1).wait(80).to({regX:7.2,regY:6,scaleX:1.05,scaleY:1.05,x:0.05},18,cjs.Ease.quintOut).wait(15).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},39,cjs.Ease.quintOut).wait(148));

	// botBG_obj_
	this.botBG = new lib.Scene_1_botBG();
	this.botBG.name = "botBG";
	this.botBG.depth = 0;
	this.botBG.isAttachedToCamera = 0
	this.botBG.isAttachedToMask = 0
	this.botBG.layerDepth = 0
	this.botBG.layerIndex = 12
	this.botBG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.botBG).wait(300));

	// topBG_obj_
	this.topBG = new lib.Scene_1_topBG();
	this.topBG.name = "topBG";
	this.topBG.depth = 0;
	this.topBG.isAttachedToCamera = 0
	this.topBG.isAttachedToMask = 0
	this.topBG.layerDepth = 0
	this.topBG.layerIndex = 13
	this.topBG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.topBG).wait(300));

	// logo1_obj_
	this.logo1 = new lib.Scene_1_logo1();
	this.logo1.name = "logo1";
	this.logo1.setTransform(256.4,233,1,1,0,0,0,256.4,233);
	this.logo1.depth = 0;
	this.logo1.isAttachedToCamera = 1
	this.logo1.isAttachedToMask = 0
	this.logo1.layerDepth = 0
	this.logo1.layerIndex = 14
	this.logo1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo1).wait(300));

	// imgMC_obj_
	this.imgMC = new lib.Scene_1_imgMC();
	this.imgMC.name = "imgMC";
	this.imgMC.setTransform(150,129.9,1,1,0,0,0,150,129.9);
	this.imgMC.depth = 0;
	this.imgMC.isAttachedToCamera = 0
	this.imgMC.isAttachedToMask = 0
	this.imgMC.layerDepth = 0
	this.imgMC.layerIndex = 15
	this.imgMC.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.imgMC).wait(114).to({regY:129.8,scaleX:1.05,scaleY:1.05,y:130},0).wait(186));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-135.1,733.5,936.3000000000001);
// library properties:
lib.properties = {
	id: 'FE59A2EB19588B4D92276D944A3E0AE5',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img1.jpg?1602533405217", id:"img1"},
		{src:"images/pack1.png?1602533405217", id:"pack1"},
		{src:"images/pack3.png?1602533405217", id:"pack3"},
		{src:"images/packnew.png?1602533405217", id:"packnew"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FE59A2EB19588B4D92276D944A3E0AE5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;