import {Marionette} from '../../../vendor/vendor'
import pagedViewTmpt from '../../templates/pagedView.jst'

/*
	A view that enables paging a collection.
	The collection and the childView have to be provided
	Extend:
	-collection
	-childView
	-elementsPerPage (default 10)
*/
export default Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'pagedView',
	childViewContainer: 'ul',
	template: pagedViewTmpt,
	elementsPerPage: 10,
	page: 0,
	totalElements: 0,
	totalPages: 0,
	ui: {
		pager: '.pager',
		pageNumButton: '.pager div[data-page]',
		pageNextButton: '.pager div[data-next-page]',
		pagePrevButton: '.pager div[data-prev-page]',
	},
	events: {
		'click @ui.pageNumButton': 'handlePagerChange',
		'click @ui.pageNextButton': 'nextPage',
		'click @ui.pagePrevButton': 'prevPage'
	},
	initialize() {
		this.listenTo(this.collection, 'reset update', this.collectionChange)
	},
	/* Class Events */
	onRender() {
		this.updatePager()
	},
	/* Event handlers */
	handlePagerChange(event) {
		this.changePage(event.target.dataset.page)
	},
	nextPage() {
		let next = this.page + 1
		if (next < this.totalPages) {
			this.changePage(this.page + 1)
		}
	},
	prevPage() {
		let next = this.page - 1
		if (next >= 0) {
			this.changePage(this.page - 1)
		}
	},
	changePage(nPage) {
		this.page = parseInt(nPage)
		this.$el.fadeTo(200, 0, ()=>{
			this.render()
			this.$el.fadeTo(200, 1)
		})
	},
	updatePager() {
		let pagerElement = this.getUI('pager')
		pagerElement.html('')
		if (this.totalPages < 2) {
			return;
		}
		//TODO: we can probably use a template here
		let pagerHTML = ''
		pagerHTML += '<div '
		if (this.page === 0) {
			pagerHTML += 'class="disabled"'
		}
		pagerHTML += ' data-prev-page="true">&lt;</div>'
		for (let i = 0; i < this.totalPages; i++) {
			pagerHTML += '<div '
			if (this.page === i) {
				pagerHTML += 'class="active"'
			}
			pagerHTML += ' data-page="' + i + '"></div>'
		}
		pagerHTML += '<div '
		if (this.page === this.totalPages - 1) {
			pagerHTML += 'class="disabled"'
		}
		pagerHTML += ' data-next-page="true">&gt;</div>'
		pagerElement.html(pagerHTML)
	},
	collectionChange() {
		this.page = 0
		this.totalElements = this.collection.length
		this.totalPages = Math.ceil(this.totalElements / this.elementsPerPage)
		this.updatePager()
	},
	viewFilter(view, index, collection) {
		return index >= this.elementsPerPage * this.page &&
				index < this.elementsPerPage * (this.page + 1)
	}
});
