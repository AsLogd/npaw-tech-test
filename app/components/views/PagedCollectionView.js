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
	listLayout: false,
	ui: {
		pager: '.pager',
		pageNumButton: '.pager div[data-page]',
		pageNextButton: '.pager div[data-next-page]',
		pagePrevButton: '.pager div[data-prev-page]',
		changeLayout: '.change-layout',
		changeLayoutBtn: '.change-layout .button',
		list: 'ul',
	},
	events: {
		'click @ui.pageNumButton': 'handlePagerChange',
		'click @ui.pageNextButton': 'nextPage',
		'click @ui.pagePrevButton': 'prevPage',
		'click @ui.changeLayoutBtn': 'handleChangeLayout'
	},
	initialize() {
		this.listenTo(this.collection, 'reset update', this.collectionChange)
	},
	/* Class Events */
	onRender() {
		this.updatePager()
		if (this.totalElements > 0) {
			this.showLayoutControl()
		}
		this.updateLayout()
	},
	/* Event handlers */
	handlePagerChange(event) {
		this.changePage(event.target.dataset.page)
	},
	handleChangeLayout(event) {
		this.listLayout = !this.listLayout
		this.updateLayout()
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
	updateLayout() {
		if (this.listLayout) {
			this.getUI('changeLayoutBtn')[0].classList.add('active')
			this.getUI('list')[0].classList.add('list-layout')
		} else {
			this.getUI('changeLayoutBtn')[0].classList.remove('active')
			this.getUI('list')[0].classList.remove('list-layout')
		}
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
	showLayoutControl() {
		this.getUI('changeLayout')[0].style.opacity = 1
	},
	collectionChange() {
		this.page = 0
		this.totalElements = this.collection.length
		this.totalPages = Math.ceil(this.totalElements / this.elementsPerPage)
		this.updatePager()
		if (this.totalElements > 0) {
			this.showLayoutControl()
		}
		this.updateLayout()
	},
	viewFilter(view, index, collection) {
		return index >= this.elementsPerPage * this.page &&
				index < this.elementsPerPage * (this.page + 1)
	}
});
