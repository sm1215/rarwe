import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

export default Route.extend({
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },
  actions: {
    didTransition() {
      let band = this.modelFor(this.routeName);
      document.title = `${band.name} songs - Rock & Roll`;
    },
  }
});
