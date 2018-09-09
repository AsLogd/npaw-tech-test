import {Marionette} from '../../../vendor/vendor'
import AlbumView from './AlbumView'
import AlbumListCollection from '../collections/AlbumListCollection'
import albumTmpt from '../../templates/album.jst'

export default Marionette.CollectionView.extend({
	tagName: 'ul',
	collection: AlbumListCollection,
	childView: AlbumView,
	fetchResults(query) {
		this.collection.fetch({
			data: {
				term: query,
				media: 'music',
				entity: 'album'
			}
		})
	}
});
