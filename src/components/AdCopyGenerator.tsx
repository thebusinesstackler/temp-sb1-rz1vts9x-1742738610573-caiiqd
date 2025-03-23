// Update the handleFileUpload function to use OpenAI
const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    setFile(file);
    
    // Read file content
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string;
        setGenerating(true);
        
        // Analyze protocol
        const analysis = await analyzeProtocol(text);
        
        // Generate ads based on analysis
        const ads = await generateAds(analysis);
        
        setGeneratedAds(ads);
      } catch (error) {
        console.error('Error processing protocol:', error);
        // Add error handling UI
      } finally {
        setGenerating(false);
      }
    };
    reader.readAsText(file);
  }
};