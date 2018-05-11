var ws281x = require('rpi-ws281x-native')
const NUM_LEDS = 64
ws281x.init(NUM_LEDS)

process.on('SIGINT', function () {
	  ws281x.reset()
	  process.nextTick(function () { process.exit(0) })
})

function rgb2Int(r, g, b) {
	return ((r & 0x00ffffff) << 16) + ((g & 0x00ffffff) << 8) + (b & 0x00ffffff);
}

var pixelData = new Uint32Array(NUM_LEDS)

pixelData = pixelData.map( x => rgb2Int(0,0,255) )
ws281x.render( pixelData )
