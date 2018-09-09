import {Marionette} from '../../../vendor/vendor'
import pagedViewTmpt from '../../templates/pagedView.jst'

import AlbumView from './AlbumView'
/*
	A view that enables paging a collection.
	The collection and the childView have to be provided
*/
export default Marionette.CollectionView.extend({
	tagName: 'div',
	childViewContainer: 'ul',
	childView: AlbumView,
	template: pagedViewTmpt,
	elementsPerPage: 10,
	page: 0,
	initialize() {
		this.listenTo(this.collection, 'add remove reset update', this.collectionChange)
	},
	collectionChange() {
		this.totalElements = this.collection.length
		this.totalPages = this.totalElements / this.elementsPerPage
	},

	viewFilter(view, index, collection) {
		return index >= this.elementsPerPage * this.page &&
				index < this.elementsPerPage * (this.page + 1)
	}
});
