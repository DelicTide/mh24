const generators = [
    {
      generatorName: 'create',
      description: 'Create an image from a prompt',
      output: 'creation'
    },
    {
      generatorName: 'interpolate',
      description: 'Create a video interpolation between two prompts',
      output: 'creation'
    },
    {
      generatorName: 'real2real',
      description: 'Create a video interpolation between two images',
      output: 'creation'
    },
    {
      generatorName: 'remix',
      description: 'Generate a remix of an image',
      output: 'creation'
    },
    {
      generatorName: 'interrogate',
      description: 'Generate a prompt from an image',
      output: 'creation'
    },
    {
      generatorName: 'tts',
      description: 'Generate a speech file from a text input',
      output: 'creation'
    },
    {
      generatorName: 'wav2lip',
      description: 'Lip-sync an image or video from a speech file',
      output: 'creation'
    },
    {
      generatorName: 'complete',
      description: 'Generate a prompt completion with GPT',
      output: 'llm'
    },
    {
      generatorName: 'sdxl-lora-trainer',
      description: 'Train a LORA finetuning from a set of images',
      output: 'concept'
    },
    {
      generatorName: 'tts_fast',
      description: 'Generate a speech file from a text input (fast)',
      output: 'creation'
    },
    {
      generatorName: 'blend',
      description: 'Will take two uploaded images and create a blend of them',
      output: 'creation'
    },
    {
      generatorName: 'upscale',
      description: 'Upscales a single image to a higher resolution',
      output: 'creation'
    },
    {
      generatorName: 'monologue',
      description: 'Prompt a character to perform an animated monologue',
      output: 'creation'
    },
    {
      generatorName: 'controlnet',
      description: 'Guide your creation with the shape of a control image',
      output: 'creation'
    },
    {
      generatorName: 'dialogue',
      description: 'Prompt two characters to have an extended conversation with each other',
      output: 'creation'
    },
    {
      generatorName: 'txt2vid',
      description: 'Make an animated video from text prompts',
      output: 'creation'
    },
    {
      generatorName: 'img2vid',
      description: 'Make an animated video from an image',
      output: 'creation'
    },
    {
      generatorName: 'vid2vid',
      description: 'Transform a video into another video using a guidance image',
      output: 'creation'
    },
    {
      generatorName: 'makeitrad',
      description: 'Makeitrad: Kojii pipeline',
      output: 'creation'
    },
    {
      generatorName: 'real2real_audio',
      description: 'Create an audioreactive video interpolating through images',
      output: 'creation'
    },
    {
      generatorName: 'story',
      description: 'Prompt three characters into a short animated film',
      output: 'creation'
    }
  ];
  
  console.log(generators);
  