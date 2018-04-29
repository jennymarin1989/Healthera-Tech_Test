import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PatientChat from '../../components/PatientChat';
import SubmitButton from '../../components/SubmitButton';


describe('PatientChat',() => {

		let chat = shallow(<PatientChat />)
	
		it("renders correctly", () => {
			expect(chat).toMatchSnapshot();
		});	

	describe("initializes state succesfully", () => {
		it("initializes state for message", () => {
			expect(chat.state('message')).toEqual("Message");
		});

		it ("initializes state for messages", () =>{
			expect(chat.state('messages')).toEqual([]);
		});
	});	

	describe("updates message state succesfully", () =>{
		it("updates state of message with target event successfully", () => {
			chat.find('message').simulate('change', {target: { value: "My message"}})
			expect(chat.state('message')).toEqual("My message");
		});
	})	

	describe("sendMessage", () => {
		it("pushes a message into messages state when click send button", () => {
			let mockMessage = jest.fn();
			let submitMessage = shallow(<SubmitButton sendMessage={mockMessage} />)
			const node = this.SubmitButton;
			submitMessage.find('.send-msg').simulate(node);
			chat.instance().sendMessage(text);
			expect(mockMessage).toBeCalled();
		})
	})

})