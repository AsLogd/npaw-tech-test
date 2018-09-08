import {Marionette} from '../../../vendor/vendor';
import searchTmpt from '../../templates/search.jst';


export default Marionette.View.extend({
	template: searchTmpt,
	ui: {
		input: '#search-input',
		submit: '#submit'
	},
	triggers: {
		'click @ui.submit': 'submit:query'
	}
});
