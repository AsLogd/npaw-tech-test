import {Marionette} from '../../../vendor/vendor';
import albumTmpt from '../../templates/album.jst';


export default Marionette.View.extend({
	tagName: 'li',
	template: albumTmpt
});
