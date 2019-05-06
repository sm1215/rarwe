import Route from '@ember/routing/route';

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
