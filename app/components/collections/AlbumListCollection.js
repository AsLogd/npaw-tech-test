import {Backbone} from '../../../vendor/vendor';
import AlbumModel from '../models/AlbumModel';

export default Backbone.Collection.extend({
	model: AlbumModel,
	url: 'https://itunes.apple.com/search',
	parse: function(response) {
		return response.results
	}
});
