import {Backbone, Marionette} from '../../vendor/vendor'
import PagedCollectionView from './views/PagedCollectionView'
import AlbumListCollection from './collections/AlbumListCollection'
import RootView from './views/RootView'
import SearchView from './views/SearchView'
import AlbumListView from './views/AlbumListView'

export default Marionette.Application.extend({
	region: '#app',

	onStart() {
		let rootView = new RootView()
		this.showView(rootView)
		rootView.showChildView('search', new SearchView())
		rootView.showChildView('results', new AlbumListView({
			collection: new AlbumListCollection([])
		}))
	}
});
