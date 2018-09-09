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
		/*
		rootView.showChildView('results', new AlbumListView({
			collection: new AlbumListCollection([])
		}))
		*/
		rootView.showChildView('results', new PagedCollectionView({
			collection: new Backbone.Collection([
				{'artistName': 'asdf1', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf2', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf3', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf4', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf5', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf6', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf7', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf8', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf9', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf11', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf12', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf13', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf14', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf15', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf16', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf17', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf18', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf19', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf20', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf21', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf22', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf23', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf24', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf25', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf26', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf27', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf28', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf29', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf30', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf31', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf32', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf33', 'collectionName': 'asdfasdf'},
				{'artistName': 'asdf34', 'collectionName': 'asdfasdf'}
			])
		}))
	}
});
