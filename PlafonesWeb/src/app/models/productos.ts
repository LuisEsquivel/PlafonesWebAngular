

export class Productos{

    constructor(
        public CveProdVar : string,
        public NomProdVar: string,
        public DescProdVar : string,
        public image : string,
        public date : any,
        public  CveClaseVar : any,
        public  CveSubclaseVar : any,
        public  CveSubgrupoVar : any,
        public  PesoDec : any,
        public  RutadefotoVar : any,

        public ImageUrl: any = RutadefotoVar.replace("~", "./assets"),

        public  EstatusBit : any,
        public  CostoPromedioDec : any,
        public  MetrosLinealesDec  : any,
        public  MetrosCuadradosDec : any ,
        public  FichaTecnicaUrlVar : any,
        public  AnchoVar : any ,
        public  AltoVar : any ,
        public  EspesorVar : any ,
        public  SugUsoVar : any ,
        public  UnidadMedidaVar : any ,
        public  MarcaVar : any ,
        public  ColorVar : any ,
        public  TexturaVar : any ,
        public  DescripcionImagenVar : any ,
        public  OrdenCategoriaInt : any ,
        public  OrdenSubcategoriaInt : any,
        public  MostrarEnProductosDestacadosBit : boolean,
        public  MetaTagProdVar : string,
        public  UrlMetaTagProdVar : string,


    ) { }

}