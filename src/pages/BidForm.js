import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ImageUploading from 'react-images-uploading';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function BidForm() {
  const [sent, setSent] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [images, setImages] = React.useState([]);
  const [bidType, setBidType] = React.useState('bid');
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleButtonClick = () => {
    window.open('http://localhost:3001/Dashboard/material-kit-react-main/src/index.js', '_blank');
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBidTypeChange = (event) => {
    setBidType(event.target.value);
  };

  const validate = (values) => {
    const errors = required(['email', 'password'], values);
    
    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Post job
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="Location"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Location"
                margin="normal"
                name="location"
                required
                size="large"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Select Category</InputLabel>
                <Select
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <MenuItem value="electrician">Electrician</MenuItem>
                  <MenuItem value="carpenter">Carpenter</MenuItem>
                  <MenuItem value="cleaner">Cleaner</MenuItem>
                  <MenuItem value="labor">Labor</MenuItem>
                  <MenuItem value="motorMechanic">Motor Mechanic</MenuItem>
                  <MenuItem value="gardener">Gardener</MenuItem>
                  <MenuItem value="helpShifting">Help Shifting</MenuItem>
                  <MenuItem value="painter">Painter</MenuItem>
                  <MenuItem value="plumber">Plumber</MenuItem>
                </Select>
              </FormControl>
              <Field
                autoComplete="off"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Description"
                margin="normal"
                name="description"
                required
                size="large"
                multiline
                rows={4}
              />
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper" style={{ paddingTop: '10px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <CloudUploadIcon fontSize="large" />
                      <Typography variant="subtitle1">
                        Click or Drop here
                      </Typography>
                    </div>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="100" />
                        <CloseIcon
                          className="remove-image-icon"
                          onClick={() => handleRemoveImage(index)}
                        />
                      </div>
                    ))}
                    <RadioGroup
                      value={bidType}
                      onChange={handleBidTypeChange}
                      row
                    >
                      <FormControlLabel
                        value="bid"
                        control={<Radio />}
                        label="Bid"
                      />
                      <FormControlLabel
                        value="flat"
                        control={<Radio />}
                        label="Flat"
                      />
                    </RadioGroup>
                    {bidType === 'bid' ? (
                      <Field
                        autoComplete="off"
                        component={RFTextField}
                        disabled={submitting || sent}
                        fullWidth
                        label="Price"
                        margin="normal"
                        name="price"
                        required
                        size="large"
                      />
                    ) : (
                      <Field
                        autoComplete="off"
                        component={RFTextField}
                        fullWidth
                        label="Price"
                        margin="normal"
                        name="price"
                        required
                        size="large"
                        disabled
                      />
                    )}
                  </div>
                )}
              </ImageUploading>
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                onClick={handleButtonClick}
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Post Job'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(BidForm);
