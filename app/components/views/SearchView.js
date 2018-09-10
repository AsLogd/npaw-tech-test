import {Marionette} from '../../../vendor/vendor';
import searchTmpt from '../../templates/search.jst';


export default Marionette.View.extend({
	template: searchTmpt,
	ui: {
		input: '#search-input',
		logo: '#npaw-logo'
	},
	events: {
		'input @ui.input': 'handleInputChange'
	},
	handleInputChange(event) {
		let val = event.target.value
		let char = val[val.length - 1]
		clearInterval(this.timeout)
		if (val.length > 3 && char === ' ') {
			this.triggerMethod('submit:query')
		} else {
			this.timeout = setTimeout(()=>{
				this.triggerMethod('submit:query')
			}, 1000)
		}
	},
	getQuery() {
		return this.getUI('input').val()
	},
	compactView() {
		this.$el[0].classList.add('compact')
	}
});
