import {Marionette} from '../../../vendor/vendor';
import AlbumView from './AlbumView';
import albumTmpt from '../../templates/album.jst';

export default Marionette.CollectionView.extend({
	tagName: 'ul',
	childView: AlbumView
});
