

		var inputStreamMask = new IMask(
		  document.getElementById('inputStream'),
		  {
		    mask: Number,
		    min: 0,
		    max: 10000
		  });
		
		var outputStreamMask = new IMask(
		  document.getElementById('outputStream'),
		  {
		    mask: Number,
		    min: 0,
		    max: 10000
		  });
		
		var heightMask = new IMask(
		  document.getElementById('height'),
		  {
		    mask: Number,
		    min: 0,
		    max: 10000
		  });
		var speedMask = new IMask(
		  document.getElementById('speed'),
		  {
		    mask: Number,
		    min: 0,
		    max: 10000
		  });

		//thickness
		var thicknessMask = new IMask(
		  document.getElementById('thickness'),
		  {
		    mask: Number,
		    min: 0,
		    max: 1000
		  });




		
