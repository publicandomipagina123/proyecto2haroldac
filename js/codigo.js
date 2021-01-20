  $ . getJSON ( "js / lang.json" ,  function ( json ) {
  // Lenguaje por defecto de la página sessionStorage.setItem ("lang", "idioma") "
  if ( ! localStorage . getItem ( "lang" ) ) {
    localStorage . setItem ( "lang" ,  "en" ) ;
  }
  var  lang  =  localStorage . getItem ( "lang" ) ;
  var  doc  =  json ;
  $ ( '.lang' ) . cada ( función ( índice ,  elemento ) {
    $ ( esto ) . text ( doc [ lang ] [ $ ( esto ) . attr ( 'clave' ) ] ) ;
  } ) ; //Cada

  $ ( '.traducir' ) . haga clic en ( función ( ) {
    localStorage . setItem ( "lang" ,  $ ( esto ) . attr ( 'id' ) )  ;
    var  lang  =  $ ( esto ) . attr ( 'id' ) ;
    var  doc  =  json ;
      $ ( '.lang' ) . cada ( función ( índice ,  elemento ) {
        $ ( esto ) . text ( doc [ lang ] [ $ ( esto ) . attr ( 'clave' ) ] ) ;
      } ) ;  //Cada
  } ) ;  // Funcion click
} ) ; // Obtener json AJAX