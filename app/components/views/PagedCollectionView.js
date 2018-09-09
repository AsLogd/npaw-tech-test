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
	totalElements: 0,
	totalPages: 0,
	ui: {
		pager: '.pager button',
	},
	events: {
		'click @ui.pager': 'nextPage'
	},
	initialize() {
		this.collectionChange()
		//this.listenTo(this.collection, 'add remove reset update', this.collectionChange)
	},
	collectionChange() {
		this.totalElements = this.collection.length
		this.totalPages = this.totalElements / this.elementsPerPage
	},
	nextPage() {
		let next = this.page + 1
		if (next < this.totalPages) {
			this.changePage(this.page + 1)
		}
	},
	changePage(nPage) {
		this.page = nPage
		this.render()
	},
	viewFilter(view, index, collection) {
		return index >= this.elementsPerPage * this.page &&
				index < this.elementsPerPage * (this.page + 1)
	}
});
