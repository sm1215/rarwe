import Route from '@ember/routing/route';
import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import { dasherize } from '@ember/string';

let Band = EmberObject.extend({
  name: '',
  language: '',
  slug: computed('name', function() {
    console.log("Recomputing slug");
    return dasherize(this.name);
  }),
  site: computed('slug', 'language', function() {
    console.log("Recomputing site");
    return `https://bands.com/${this.slug}.${this.language}`;
  })
});

let Song = EmberObject.extend({
  title: '',
  rating: 0,
  band: ''
});

export default Route.extend({
  model() {
    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zepplin',
      rating: 3
    });

    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    let daughter = Song.create({
      title: 'Daughter',
      band: 'Foo Fighters',
      rating: 2
    });

    let ledZeppelin = Band.create({ 
      name: 'Led Zeppelin', 
      songs: A([blackDog]) 
    });

    let pearlJam = Band.create({ 
      name: 'Pearl Jam', 
      songs: A([yellowLedbetter, daughter]) 
    });

    let fooFighters = Band.create({ 
      name: 'Foo Fighters', 
      songs: A([pretender]) 
    });

    return A([ledZeppelin, pearlJam, fooFighters]);
  }
});
