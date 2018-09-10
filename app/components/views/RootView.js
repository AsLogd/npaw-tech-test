import {Marionette} from '../../../vendor/vendor'
import rootTmpt from '../../templates/root.jst'

export default Marionette.View.extend({
	template: rootTmpt,
	firstTime: true,
	regions: {
		search: '#search-bar',
		results: '#results'
	},
	childViewEvents: {
		'submit:query': 'submitQuery'
	},
	submitQuery() {
		if (this.firstTime) {
			this.firstTime = false
			this.getChildView('search').compactView()
		}
		this.getChildView('results').fetchResults(
			this.getChildView('search').getQuery()
		)
	}
});
