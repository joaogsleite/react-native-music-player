
var assert = require('assert');
var Parser = require('stream-parser');
var inherits = require('util').inherits;
var Transform = require('stream').Transform;

// node v0.8.x compat
if (!Transform) Transform = require('readable-stream/transform');

module.exports = Throttle;


function Throttle (opts) {
  if (!(this instanceof Throttle)) return new Throttle(opts);

  if ('number' == typeof opts) opts = { bps: opts };
  if (!opts) opts = {};
  if (null == opts.lowWaterMark) opts.lowWaterMark = 0;
  if (null == opts.highWaterMark) opts.highWaterMark = 0;
  if (null == opts.bps) throw new Error('must pass a "bps" bytes-per-second option');
  if (null == opts.chunkSize) opts.chunkSize = opts.bps / 10 | 0; // 1/10th of "bps" by default

  Transform.call(this, opts);

  this.bps = opts.bps;
  this.chunkSize = Math.max(1, opts.chunkSize);

  this.totalBytes = 0;
  this.startTime = Date.now();

  this._passthroughChunk();
}
inherits(Throttle, Transform);


Parser(Throttle.prototype);

Throttle.prototype._passthroughChunk = function () {
  this._passthrough(this.chunkSize, this._onchunk);
  this.totalBytes += this.chunkSize;
};

Throttle.prototype._onchunk = function (output, done) {
  var self = this;
  var totalSeconds = (Date.now() - this.startTime) / 1000;
  var expected = totalSeconds * this.bps;

  function d () {
    self._passthroughChunk();
    done();
  }

  if (this.totalBytes > expected) {
    // Use this byte count to calculate how many seconds ahead we are.
    var remainder = this.totalBytes - expected;
    var sleepTime = remainder / this.bps * 1000;
    //console.error('sleep time: %d', sleepTime);
    if (sleepTime > 0) {
      setTimeout(d, sleepTime);
    } else {
      d();
    }
  } else {
    d();
  }
};

Throttle.prototype.set_bps = function(bps){
    this.bps = bps
}

Throttle.prototype.get_total = function(){
    return this.totalBytes;
}

function set_limit(t,l,bps){
    if(t.get_total()>=l){
        t.set_bps(bps)
    }else{
        setTimeout(function(){ set_limit(t,l,bps); },50)
    }
}
Throttle.prototype.limit = function(l,bps){
    set_limit(this,l,bps)
}
