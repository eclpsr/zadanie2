(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
	var zxc = 0; 
	var buf1 = 0;
	var buffer_look = [];
		var r1 = 0;
		var r2 = 0;
    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
	 
    function solution( map ) {
        // todo: подсчитать кол-во островов на карте
		var buffer_one = [];
		var schetchik = 0;
		for ( a = 0; a < 5; a++ ){
	    for ( b = 0; b < 4; b++) {
		 document.write( "[a,b]=", a ,",", b , "  ");
		 document.write( "map[a,b]=", map[a][b], "  " ,"ostrova=", schetchik ,"<br>" );
         	 
		 if(map[a][b] != 0){
			            ++schetchik;
						buffer_one.push( [a],[b] ); 
						document.write( "buffer=", a, ";" , b );
						document.write( "map[a,b]=", map[a][b] );
						lookandseek( a,b );
                        for ( ; 0 < buffer_look.length; ) {
		                r1 = buffer_look[ buf1 ];
		                r2 = buffer_look[ buf1 + 1 ];
		                lookandseek(r1, r2);
						buffer_look.shift();
						buffer_look.shift();
		                }
					}
         }
		 }
		 
		
    }
	function lookandseek( a, b ){
		var c1 = 0 ;
		var y1 = a ; 
		var x1 = b ; 
		var i = 0;
		var j = 0;

		root.SHRI_ISLANDS.MAP[a][b] = (0) ;

		//2. функция просмотра(а=1.2) -1.0, +1.0; -0.1, +0.1 -> если положительно записываем в буффер(массив: buffer_global)
		
        for ( z = -1 ; z <= 1; z++ ) {
		y1 = z + a ;
		if(y1 < 0 || y1 > 4) {  } else { if(x1 < 0 || x1 > 3) {  } else {
		c1 = root.SHRI_ISLANDS.MAP[y1][x1];	
		if( c1 != 0 ){
		buffer_look.push(y1, x1);
		}
		} //else
		} //else
		}
	    y1 = a ;
	    for( x = -1; x <=1; x++){
	    x1 = x + b ;
		
		if(y1 < 0 || y1 > 4) {  } else { if(x1 < 0 || x1 > 3 ) {  } else {
		
 		
		c1 = root.SHRI_ISLANDS.MAP[y1][x1];	
		
		if( c1 != 0 ){
		buffer_look.push(y1, x1);
		}
		} //else
		} //else
	    }
	    } 
	
    root.SHRI_ISLANDS.solution = solution;
	
})(this);
