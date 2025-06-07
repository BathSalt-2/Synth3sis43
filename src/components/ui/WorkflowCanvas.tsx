import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WorkflowCanvasProps {
  selectedWorkflow: string | null;
}

const WorkflowCanvas: React.FC<WorkflowCanvasProps> = ({ selectedWorkflow }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    if (!selectedWorkflow) {
      // Draw placeholder
      ctx.fillStyle = '#475569';
      ctx.font = '18px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('Select a workflow to view the designer', canvas.offsetWidth / 2, canvas.offsetHeight / 2);
      return;
    }

    // Draw workflow nodes
    const nodes = [
      { x: 100, y: 100, label: 'Listen', type: 'input' },
      { x: 300, y: 100, label: 'Analyze', type: 'process' },
      { x: 500, y: 100, label: 'Respond', type: 'output' },
      { x: 300, y: 250, label: 'Adapt', type: 'feedback' },
    ];

    const connections = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 3, to: 1 },
    ];

    // Draw connections
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    connections.forEach(conn => {
      const fromNode = nodes[conn.from];
      const toNode = nodes[conn.to];
      
      ctx.beginPath();
      ctx.moveTo(fromNode.x + 40, fromNode.y + 20);
      
      // Curved line
      const midX = (fromNode.x + toNode.x) / 2;
      const midY = (fromNode.y + toNode.y) / 2 - 30;
      ctx.quadraticCurveTo(midX, midY, toNode.x - 40, toNode.y + 20);
      ctx.stroke();
      
      // Arrow
      const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x);
      ctx.beginPath();
      ctx.moveTo(toNode.x - 40, toNode.y + 20);
      ctx.lineTo(toNode.x - 50, toNode.y + 15);
      ctx.lineTo(toNode.x - 50, toNode.y + 25);
      ctx.closePath();
      ctx.fill();
    });

    // Draw nodes
    nodes.forEach(node => {
      const colors = {
        input: '#10b981',
        process: '#06b6d4',
        output: '#8b5cf6',
        feedback: '#f59e0b'
      };

      ctx.fillStyle = colors[node.type as keyof typeof colors];
      ctx.fillRect(node.x - 40, node.y - 20, 80, 40);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '14px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + 5);
    });

  }, [selectedWorkflow]);

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {!selectedWorkflow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <p className="text-gray-400">Select a workflow to start designing</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkflowCanvas;