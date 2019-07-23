import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import LabelVideo from '@/components/labels/LabelVideo.vue'

storiesOf('Components|Labels/Label Video', module)
.addDecorator(StoryRouter())
.addDecorator(storyFn => {
	const children = storyFn();
	return {
		components: { children },
		template: `
			<div class="w-full max-w-xl ml-8 mt-8">
				<div class="w-1/3">
					<children/>
				</div>
			</div>`,
	};
})
  .add('Default', () => ({
    components: { LabelVideo },
    template: '<label-video :item="item"></label-video>',
    data(){
			return{
				item: {
					image:{
						url:"https://images-akamai-kompas-id.azureedge.net/wp-content/uploads/2019/05/20190520_134519_1558418347-720x350.jpg"},
					to:'',
					title: 'AWA',	
				}	
			}
    }
  }))

  