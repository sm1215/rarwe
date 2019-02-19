import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  }
});
