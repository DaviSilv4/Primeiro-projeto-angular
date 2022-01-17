export interface Produto{
  _id: string;
  image: {
    img: string,
    imgCarroseul: {
      img1: string,
      img2: string,
      img3: string,
      img4: string,
      img5: string,
      img6: string,
      img7: string,
      img8: string
    }

  },
  nomeProduto: string,
  codigo: string
  preco: {
    precoDesconto: number,
    precoPrime: number,
    precoAVista: number
  },
  voltagem: {
    bivolt: boolean,
    110: boolean,
    220: boolean
  },
  quantidade: number
}
