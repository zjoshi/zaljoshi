import React from 'react';
import Gallery from 'react-grid-gallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';


const axios = require('axios').default;

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], images: [] , gridImages: [], hasLoaded: false};
  }

  async componentDidMount() {
    var self = this;

    const apiKey = "53272b9d1ecb3e95635602553a604196";
    const secret = "e5b68b4b3db424c1";

    const data = {
      method: 'flickr.photosets.getPhotos',
      api_key: apiKey,
      photoset_id: "72177720295700665",
      user_id: "151915827@N03",
      //sort: 'interestingness-desc',
      //per_page: 12,
      //license: '4',
      //extras: 'owner_name,license',
      format: 'json',
      nojsoncallback: 1
    };

    const parameters = new URLSearchParams(data);
    const url = `https://api.flickr.com/services/rest/?${parameters}`;



    const firstRequest = await Promise.all([
      axios({
        method: 'get',
        url: url
      }).then(function (response) {
        console.log(response.data.photoset.photo);
        self.setState({data: response.data.photoset.photo});
      }).catch(function (error) {
        console.log(error);
      })
    ]);



    var promises = [];

    for (const img of this.state.data) {

      let requestData = {
        method: 'flickr.photos.getSizes',
        api_key: apiKey,
        photo_id: img.id,
        format: 'json',
        nojsoncallback: 1
      };

      console.log(img.id);

      let imgParams = new URLSearchParams(requestData);
      var requestUrl = `https://api.flickr.com/services/rest/?${imgParams}`;

      promises.push(
        axios.get(requestUrl).then(response => {
          this.setState({ images: [...this.state.images, response.data] });
        })
      );
    }

    Promise.all(promises).then(()=> {
      for (const img of this.state.images) {
        console.log(img.sizes.size[0].source);
        let image = {
          src: img.sizes.size[8].source,
          thumbnail: img.sizes.size[9].source
          //thumbnailWidth: 174,
          //thumbnailHeight: 174,
        };
        this.setState({gridImages: [...this.state.gridImages, image]});
      }
      this.setState({hasLoaded: true});

    });

  }



  render() {
     let content = "";
     if (!this.state.hasLoaded) {
       content = <Skeleton loading={!this.state.hasLoaded} active />;
     }
     else {
       content = <Gallery id="gallery" images={this.state.gridImages} enableLightbox={true}
           enableImageSelection={false}/>;
     }



    return (

      <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>

          {content}
     </div>

    );
  }


}


export default Art;
