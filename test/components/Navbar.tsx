import { test, describe, expect } from 'vitest'
import { render } from '@testing-library/react'
import Navbar from '../../src/components/Navbar/Navbar'

describe('<Navbar />', () => {

    test('should render a navbar', () => {

        render(<Navbar/>)


    })



})