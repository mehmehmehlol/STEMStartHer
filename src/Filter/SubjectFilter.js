import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

const Filter = () => {
    return (
        <div>
            <label>
                Subjects of Expertise
                <select>
                    <options value="Science">Science</options>
                    <options value="Biology">Biology</options>
                    <options value="Chemistry">Chemistry</options>
                    <options value="Physics">Physics</options>
                    <options value="Environmental">Environmental</options>
                    <options value="Geology">Geology</options>
                    <options value="Technology">Technology</options>
                    <options value="Computer Science">Computer Science</options>
                    <options value="Nanotech">Nanotech</options>
                    <options value="Web Development">Web Development</options>
                    <options value="Software">Software</options>
                    <options value="AI/Machine Learning">AI/Machine Learning</options>
                    <options value="VR">VR</options>
                    <options value="Data Science">Data Science</options>
                    <options value="Math">Math</options>
                    <options value="Statistics">Statistics</options>
                    <options value="Calculus">Calculus</options>
                </select> 
            </label>

            <label>Fields of Expertise</label>
                <select>
                    <options value="Electrical Engineering">Electrical Engineering</options>
                    <options value="System Designs">System Designs</options>
                    <options value="Microprocessors">Microprocessors</options>
                    <options value="Nanofabrication">Nanofabrication</options>
                    <options value="Pharmaceutical Distribution">Pharmaceutical Distribution</options>
                    <options value="Geology">Geology</options>
                    <options value="Technology">Technology</options>
                    <options value="Computer Science">Computer Science</options>
                    <options value="Data Visualization">Data Visualization</options>
                    <options value="Statiscal Analysi">Statiscal Analysis</options>
                    <options value="Statiscal Modeling">Statiscal Modeling</options>
                    <options value="Food Production">Food Production</options>
                    <options value="Biology">Biology</options>
                    <options value="Wildlife Management">Wildlife Management</options>
                    <options value="Evolution">Evolution</options>
                    <options value="Chemistry">Chemistry</options>
                    <options value="Tax Law">Tax Law</options>
                    <options value="Life Insurance">Life Insurance</options>
                    <options value="Machine Learning">Machine Learning</options>
                    <options value="Wildlife Biology">Wildlife Biology</options>
                    <options value="Environmental Science">Environmental Science</options>
                </select> 

            <label>
                Location
                <select>
                    <options value="Miami, FL">Miami, FL</options>
                    <options value="Boston, MA">Boston, MA</options>
                    <options value="Miami, FL">Boise, ID</options>
                    <options value="Boise, ID">San Francisco, CA</options>
                    <options value="Dallas, TX">Dallas, TX</options>
                    <options value="Seattle, WA">Seattle, WA</options>
                    <options value="New York, NY">New York, NY</options>
                    <options value="Cincinnati, OH">Cincinnati, OH</options>
                </select> 
            </label>
        </div>
    )
}

export default Filter



