import {Marionette} from '../../../vendor/vendor'
import rootTmpt from '../../templates/root.jst'

export default Marionette.View.extend({
	template: rootTmpt,
	regions: {
		search: '#search-bar',
		results: '#results'
	},
	childViewEvents: {
		'submit:query': 'submitQuery'
	},
	submitQuery() {
		this.getChildView('results').fetchResults(
			this.getChildView('search').getQuery()
		)
	}
});
