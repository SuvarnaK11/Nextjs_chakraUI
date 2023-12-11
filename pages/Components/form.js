import { FormControl, FormLabel, Input, Button, RadioGroup, Radio, Select } from '@chakra-ui/react'
import { useState } from 'react';
import React from 'react';

const FormPage = () => {
    const [formData, setFormData] = useState({
        ration_card:'',
        ration_card_type:'',

    })

    const handleChange = (value, key) => {
        setFormData({
        ...formData,
            [key]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               
                <FormControl>
                    <FormLabel>Do you have a Ration Card?</FormLabel>
                    <RadioGroup 
                    name="ration_card" 
                    value={formData.ration_card}
                    defaultValue={null}
                    onChange={(value) => handleChange(value, 'ration_card')} 
                    >
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>

                    </RadioGroup>
                </FormControl>

                { formData.ration_card === 'yes' && (
                                    <FormControl>
                                    <FormLabel>What type of a Ration Card do you have?</FormLabel>
                                    <Select
                                    name='ration_card_type'
                                    placeholder='type of a Ration Card'
                                    value={formData.ration_card_type}
                                    onChange={(e)=> handleChange(e.target.value, 'ration_card_type')}
                                    >
                                        <option value="AbovePovertyLine">Above Poverty Line</option>
                                        <option value="BelowPovertyLine">Below Poverty Line</option>
                                        <option value="AbovePovertyLine1">Above Poverty Line</option>
                                    </Select>
                                </FormControl>
                )}

                { formData.ration_card_type && (
                    <Button type='submit' mt={4} colorScheme='teal'>Submit</Button>
                )}
                
            </form>
        </div>
    )
}

export default FormPage;