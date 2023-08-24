import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  Button,
  Image,
  ImageElement,
  EditorContainer,
  HrElement,
  ButtonContainer,
  TextAreaElement,
  UnderlineButton,
  ItalicButton,
} from './styledComponents'

import './index.css' 

class TextEditor extends Component{
    state={
        textToBold:false,
        textToItalic:false,
        textToUnderline:false,
    } 

    onClickBold = () => {
        this.setState(prevState => ({textToBold:!prevState.textToBold}))
    }

    onClickItalic = () => {
        this.setState(prevState => ({textToItalic:!prevState.textToItalic}))
    }

    onClickUnderline = () => {
        this.setState(prevState => ({textToUnderline:!prevState.textToUnderline}))
    }

    render() {
        const {textToBold,textToItalic,textToUnderline} = this.state 

        const boldButtonColor = textToBold === false ? "#ffffff":"#faff00"

        const italicButtonColor  = textToItalic===false ? "#ffffff":"#faff00"

        const underlineButtonColor = textToUnderline===false ? "#ffffff":"#faff00" 

        const fontWeight = textToBold===false ? "normal" : "bold" 

        const fontStyle = textToItalic===false ? "normal" : "italic" 

        const textDecoration = textToUnderline===false ? "normal" : "underline"

        return (
            <div className="background-container">
            <div className="central-container">
              <div className="image-container">
                <div>
                  <Heading>Text Editor</Heading>
                  <ImageElement>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                      className="image"
                      alt="text editor"
                    />
                  </ImageElement>
            </div>
        <EditorContainer>
            <ButtonContainer>
                    <li>
                        <Button
                          type="button" 
                           data-test-id="bold"
                            color={boldButtonColor}
                            onClick={this.onClickBold}
                            >
                          <VscBold size={25}/>
                        </Button>
                    </li>
                    <li>
                       <ItalicButton
                          type="button" 
                             data-test-id="italic"
                               color={italicButtonColor}
                              onClick={this.onClickItalic}
                               >
                             <GoItalic size={25} />
                         </ItalicButton>
                    </li>
                 <li>
                    <UnderlineButton
                    type="button" 
                    data-test-id="underline"
                    color={underlineButtonColor}
                    onClick={this.onClickUnderline}
                    >
                  <AiOutlineUnderline size={25} />
                    </UnderlineButton>
                    </li>
                      </ButtonContainer>
                        <HrElement />
                      <TextAreaElement
                     fontWeight = {fontWeight}
                     fontStyle = {fontStyle} 
                   textDecoration ={textDecoration}
                  />
                </EditorContainer>
              </div>
            </div>
         </div>
        )
    }
} 
export default TextEditor