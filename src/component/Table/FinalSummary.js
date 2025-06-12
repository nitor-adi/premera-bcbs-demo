import { MessageCircleWarning } from 'lucide-react';

export default function AgentRecommendationMessage() {
    return (
        <div className="flex justify-start px-4 py-3">
            <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm w-full max-w-xl">
                <div className="mt-1">
                    <MessageCircleWarning className="text-orange-500 w-5 h-5" />
                </div>
                <div className="text-sm text-gray-800 leading-relaxed">
                    <strong className="text-orange-700 font-medium">
                        Agent Recommendation:
                    </strong>{' '}
                    The claim has been{' '}
                    <span className="font-semibold text-red-600">rejected</span>
                    . More information is required to adjudicate the{' '}
                    <span className="font-semibold text-blue-700">
                        pended claims
                    </span>
                    .
                </div>
            </div>
        </div>
    );
}
