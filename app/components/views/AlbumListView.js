import {Marionette} from '../../../vendor/vendor'
import AlbumView from './AlbumView'
import PagedCollectionView from './PagedCollectionView'
import AlbumListCollection from '../collections/AlbumListCollection'
import albumTmpt from '../../templates/album.jst'

export default PagedCollectionView.extend({
	tagName: 'div',
	childView: AlbumView,
	collection: AlbumListCollection,
	elementsPerPage: 20,
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
