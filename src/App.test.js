/*import {render,screen} from '@testing-library/react'
import App from './App'
test("check app is rendered or not",()=>{
    render(<App/>);
    expect(screen.getByText(/React/)).toBeInTheDocument()
})*/
import {render,screen} from '@testing-library/react'
import UserEvent from "@testing-library/user-event"
import App from "./App"
beforeAll(()=>console.log("test started"))
afterAll(()=>console.log("test has ended"))
test("test increment action",()=>{
    render(<App/>)
    const counter=screen.getByTestId("counter")
    const incrementButton=screen.getByText("Increment")
    UserEvent.click(incrementButton)
    UserEvent.click(incrementButton)
    UserEvent.click(incrementButton)
    expect(counter.textContent).toEqual("3")
})


