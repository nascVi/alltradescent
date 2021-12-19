import './App.css';
// import { useWeb3React } from "@web3-react/core";
// import { injected } from "./wallet/Connector";
// import web3 from "web3";


function App() {
  // Main Banner Image
  // const { active, account, library, activate, deactivate } = useWeb3React();
  const mainBgImage = "https://jamesmichie.com/blog/wp-content/uploads/2020/05/Empire-Luke-Vader.gif";

  // async function connect() {
  //   try {
  //     await activate(injected);
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  // Apes Image Data
  const items = [
    { img: 'https://www.brianstoys.com/media/catalog/product/cache/9058906057efda0e373a17d83876278a/i/m/img_1341_2.jpg' },
    { img: 'https://i.pinimg.com/originals/f8/fe/ea/f8feea214ca76dd6b8ec3d4cf67cd84b.jpg' },
    { img: 'https://cdn.starwebserver.se/shops/tag1/files/cache/36712_medium.jpg?_=1596732410' },
    { img: 'https://tanagra.fr/4682-large/figurine-les-maitres-de-l-univers-roboto-mattel-en-loose.jpg' },

    { img: 'https://thumbs.worthpoint.com/zoom/images4/1/0817/15/pokemon-cards-original-151-150_1_2bdfd61ba23bf8f31fe635c9e9338e77.jpg' },
    { img: 'https://pbs.twimg.com/media/FAYsaeeWQAEmCQ3.jpg' },
    { img: 'https://1.bp.blogspot.com/-KxyGL5U39NY/UgrE_cs3f-I/AAAAAAAAACg/icAl8Cer0Xs/s1600/Ugly+Dolls.png' },
    { img: 'https://contents.mediadecathlon.com/p162563/k$5b0d72eb563ce401154e7a471676234c/sq/draisienne-enfant-10-pouces-runride-520-cruiser-noir.jpg?format=auto&f=646x646' },

    { img: 'https://medias.go-sport.com/media/resized/1300x/catalog/product/01/24/95/10/exalta-20-city-14_1_v1.jpg' },
    { img: 'https://www.univers-train.com/4612-large_default/lgb-70304-coffret-de-depart-voyageurs-noel-avec-locomotive-vapeur-lumiere-et-fumigene-analogique.jpg' },
    { img: 'https://www.brianstoys.com/media/catalog/product/cache/9058906057efda0e373a17d83876278a/i/m/img_9980_2.jpg' },
    { img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/75/47/3b/3884917/1540-1/tsp20210820111950/Vehicule-a-pedale-Little-Tikes-Cozy-Coupe-30eme-anniversaire.jpg' },

    { img: 'https://images-eu.ssl-images-amazon.com/images/I/811aQUIWrBL.__AC_SY300_SX300_QL70_ML2_.jpg' },
    { img: 'https://alsace-modelisme.fr/wp-content/uploads/2021/01/FL732136.jpg' },
    { img: 'https://www.lapulce.it/Public/Foto/20190820/nintendo-switch-5-giochi_1_6697164.jpg' },
    { img: 'https://lh3.googleusercontent.com/proxy/-qx9GeKwSn2HWYDUJGzSX2Um0JCqESnx7lLCKIwamYxGY2LTbZkjQHSkd8mLnp0Bf88rdLm7Rqdvsi034Bn66vnEODXw-sJrQCGuZIPxxD4nux6FcdAAkfLZY1iRe_RAswhK1I9RgaUO4SSwGCbXogUuYwfoJVxlhlKE8HiEDTBM3sRKcJ3tHa4tcswptaw' },
  ]
  return (
    <div className="App">

      {/* MAIN BANNER */}
      <div className="main-card-wrapper" style={{ backgroundImage: `url(${mainBgImage})` }}>
        <div className="main-card__inner-wrapper">
          <h1 className="header-txt">All Trades Cent</h1>
          <button className="main-mint-btn">Trade</button>
        </div>
      </div>

      {/* ITEM LIST */}
      <div className="cards-wrapper">
        {items.map((item, index) => (
          <div className="cards-item" key={index}>
            <div className="img-wrapper">
              <img src={item.img} alt={`item_${index}`} />
            </div>
            <div className="btn-wrapper">
              <button
              type="button"
              className="sm-mint-button"
              // onClick={connect}
              >
                Trade</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
