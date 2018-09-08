import {Backbone, Marionette} from '../../vendor/vendor';
import AlbumListView from './views/AlbumListView';

export default Marionette.Application.extend({
	region: '#app',

	onStart() {
		this.showView(new AlbumListView({
			collection: new Backbone.Collection([
				{author: 'Jamiroquai', title: 'Supersonic', image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpmdvod.nationalgeographic.com%2FNG_Video_DEV%2F970%2F971%2Fjamiroquai-supersonic-wm_480x360.jpg&f=1'},
				{author: 'AC/DC', title: 'Thunderstruck', image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fajournalofmusicalthings.com%2Fwp-content%2Fuploads%2FACDC-Thunderstruck.jpg&f=1'},
				{author: 'Falls of Rauros', title: 'The light that dwells in rotten woord', image: 'https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.brooklynvegan.com%2Fimg%2Fmetal%2Fvarious%2Ffallsofrauros.jpg&u=http://www.brooklynvegan.com/files/img/metal/various/fallsofrauros.jpg'}
			])
		}));
	}
});
