import {Marionette} from '../../../vendor/vendor'
import rootTmpt from '../../templates/root.jst'

export default Marionette.View.extend({
	template: rootTmpt,
	regions: {
		search: '#search-bar',
		results: '#results'
	},
	onChildviewSubmitQuery() {
		this.getChildView('results').fetchResults(
			this.getChildView('search').getQuery()
		)
	}
});
