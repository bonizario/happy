import Image from '../entities/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.1.9:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
